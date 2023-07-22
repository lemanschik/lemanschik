let confirmDialog = null;
let errorDialog = null;
let main = null;
let mainInnerHTML = '';
const mainEmptyHTML = '<span>🫙</span> Origin Private File System is empty.';

let interval = null;

let lastLength = 0;

const readableSize = (size) => {
  if (size === 0) return '0B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / Math.pow(1024, i)).toFixed(2) * 1} ${
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
  }`;
};

const createTreeHTML = (structure, container) => {
  const entries = Object.entries(structure);
  // Sort entries by name and kind.
  entries
    .sort((a, b) => {
      if (a[0] === b[0]) return 0;
      return a[0] < b[0] ? -1 : 1;
    })
    .sort((a, b) => {
      if (a[1].kind === b[1].kind) return 0;
      return a[1].kind < b[1].kind ? -1 : 1;
    });
  for (const [key, value] of entries) {
    if (value.kind === 'directory') {
      const details = document.createElement('details');
      container.append(details);
      const summary = document.createElement('summary');
      summary.classList.add('directory');
      details.append(summary);
      if (value.relativePath === '.') {
        details.open = true;
        details.classList.add('root');
        summary.textContent = ' ';
      } else {
        const directoryNameSpan = document.createElement('span');
        directoryNameSpan.textContent = key;
        const deleteSpan = document.createElement('span');
        deleteSpan.textContent = '🗑️';
        deleteSpan.classList.add('delete');
        deleteSpan.addEventListener('click', (event) => {
          confirmDialog.querySelector('span').textContent = 'directory';
          confirmDialog.querySelector('code').textContent = key;
          confirmDialog.addEventListener(
            'close',
            (event) => {
              if (confirmDialog.returnValue === 'delete') {
                browser.tabs.sendMessage(
                  browser.devtools.inspectedWindow.tabId,
                  {
                    message: 'deleteDirectory',
                    data: value.relativePath,
                  },
                  (response) => {
                    if (response.error) {
                      errorDialog.querySelector('p').textContent =
                        response.error;
                      return errorDialog.showModal();
                    }
                    div.remove();
                  },
                );
              }
            },
            { once: true },
          );
          confirmDialog.showModal();
        });
        summary.append(directoryNameSpan, deleteSpan);
      }
      const div = document.createElement('div');
      details.append(div);
      createTreeHTML(value.entries, div);
    } else if (value.kind === 'file') {
      const div = document.createElement('div');
      div.classList.add('file');
      div.tabIndex = 0;
      div.title = `Type: ${
        value.type || 'Unknown'
      } - Last modified: ${new Date(value.lastModified).toLocaleString()}`;
      container.append(div);
      const fileNameSpan = document.createElement('span');
      fileNameSpan.textContent = key;
      fileNameSpan.addEventListener('click', (event) => {
        browser.tabs.sendMessage(browser.devtools.inspectedWindow.tabId, {
          message: 'saveFile',
          data: value.relativePath,
        });
      });
      const sizeSpan = document.createElement('span');
      sizeSpan.classList.add('size');
      sizeSpan.textContent = readableSize(value.size);
      const deleteSpan = document.createElement('span');
      deleteSpan.textContent = '🗑️';
      deleteSpan.classList.add('delete');
      deleteSpan.addEventListener('click', (event) => {
        confirmDialog.querySelector('span').textContent = 'file';
        confirmDialog.querySelector('code').textContent = key;
        confirmDialog.addEventListener(
          'close',
          (event) => {
            if (confirmDialog.returnValue === 'delete') {
              browser.tabs.sendMessage(
                browser.devtools.inspectedWindow.tabId,
                {
                  message: 'deleteFile',
                  data: value.relativePath,
                },
                (response) => {
                  if (response.error) {
                    errorDialog.querySelector('p').textContent =
                      response.error;
                    return errorDialog.showModal();
                  }
                  div.remove();
                },
              );
            }
          },
          { once: true },
        );
        confirmDialog.showModal();
      });
      div.append(fileNameSpan, sizeSpan, deleteSpan);
    }
  }
};

const refreshTree = () => {
  browser.tabs.sendMessage(
    browser.devtools.inspectedWindow.tabId,
    { message: 'getDirectoryStructure' },
    (response) => {
      if (!response.structure) {
        return;
      }
      // Naive check to avoid unnecessary DOM updates.
      const newLength = JSON.stringify(response.structure).length;
      if (lastLength === newLength) {
        return;
      }
      lastLength = newLength;
      if (Object.keys(response.structure).length === 0) {
        main.innerHTML = mainEmptyHTML;
        return;
      }
      const div = document.createElement('div');
      createTreeHTML(response.structure, div);
      main.innerHTML = '';
      main.append(div);
      main.addEventListener('keydown', (event) => {
        if (event.target.nodeName === 'SUMMARY') {
          if (event.key === 'ArrowRight') {
            event.target.parentElement.open = true;
          } else if (event.key === 'ArrowLeft') {
            event.target.parentElement.open = false;
          }
        }
      });
    },
  );
};

const panelContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="dark light" />
    <style>
      :root {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color-scheme: dark light;
        --background-color: #eee;
        --secondary-text-color-color: #333;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --background-color: #202124;
          --secondary-text-color-color: #d4d4d4;
        }
      }
      main {
        background-image: linear-gradient(
          to bottom,
          Canvas,
          Canvas 50%,
          var(--background-color) 50%,
          var(--background-color)
        ) !important;
        background-size: 100% 2.5rem;
        overflow-x: clip;
      }
      main:has(.spinner) {
        background-image: none;
      }
      details {
        margin-left: 2rem;
      }
      summary {
        list-style: none;
        cursor: pointer;
      }
      dialog {
        max-width: 65ch;
      }
      dialog::backdrop {
        backdrop-filter: blur(5px);
      }
      code {
        font-family: ui-monospace, monospace;
        color: red;
      }
      details.root > summary::before {
        content: "🏠 (Root)";
      }
      details:not(.root):not([open]) > summary::before {
        content: "📁 ";
        margin-inline-end: 0.25rem;
      }
      details:not(.root)[open] > summary::before {
        content: "📂 ";
        margin-inline-end: 0.25rem;
      }
      .directory {
        margin-inline-start: calc(-100vw - 2rem);
      }
      .file {
        margin-inline-start: -100vw;
      }
      .directory,
      .file {
        height: 1.25rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 100vw;
        padding-left: 100vw;
      }
      .directory:hover,
      .file:hover {
        background-color: Canvas;
      }
      .size,
      .delete {
        margin-inline-start: 0.25rem;
      }
      .size {
        cursor: default;
        color: var(--secondary-text-color-color);
      }
      .confirm-dialog form::before {
        content: "🛎️ Question:";
      }
      .error-dialog form::before {
        content: "❌ Error:";
      }
      .spinner {
        animation: spin 4s linear infinite;
        display: inline-block;
      }
      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <main>
      <span class="spinner">⏳</span> Analyzing Origin Private File System
    </main>
    <dialog class="confirm-dialog">
      <form method="dialog">
        <p>Do you really want to delete the <span></span> <code></code>?</p>
        <div>
          <button type="cancel" value="cancel">Cancel</button>
          <button type="submit" class="confirm-button" value="delete">
            Confirm
          </button>
        </div>
      </form>
    </dialog>
    <dialog class="error-dialog">
      <form method="dialog">
        <p></p>
        <div>
          <button type="submit" class="confirm-button" value="ok">OK</button>
        </div>
      </form>
    </dialog>
  </body>
</html>`;
browser.devtools.panels.create(
  'OPFS Explorer',
  'icon128.png',
  'panel.html',
  (panel) => {
    panel.onShown.addListener((extPanelWindow) => {
      confirmDialog =
        extPanelWindow.document.body.querySelector('.confirm-dialog');
      errorDialog =
        extPanelWindow.document.body.querySelector('.error-dialog');
      main = extPanelWindow.document.body.querySelector('main');
      if (!mainInnerHTML) {
        mainInnerHTML = main.innerHTML;
      }

      lastLength = 0;

      refreshTree();
      interval = setInterval(refreshTree, 3000);
    });

    panel.onHidden.addListener(() => {
      clearInterval(interval);
    });
  },
);

// Create a connection to the background service worker.
const backgroundPageConnection = browser.runtime.connect({
  name: 'devtools-page',
});

// Relay the tab ID to the background service worker.
backgroundPageConnection.postMessage({
  name: 'init',
  tabId: browser.devtools.inspectedWindow.tabId,
});

backgroundPageConnection.onMessage.addListener((message) => {
  if (message.name === 'navigation') {
    lastLength = 0;
    main.innerHTML = mainInnerHTML;
    refreshTree();
  }
});

