const browser = globalThis.browser || chrome;

const applyEl = (el,{style, dataset,...props}={}) => Object.assign(el,props)
    && Object.assign(el.style, style) && Object.assign(el.dataset, dataset) && el;

const createEl = (tagName,props) => applyEl(document.createElement(tagName),props);

const readableSize = (size) => {
    if (size === 0) return '0B';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / Math.pow(1024, i)).toFixed(2) * 1} ${
        ['B', 'KB', 'MB', 'GB', 'TB'][i]
    }`;
};

const refreshTree = (extPanelWindow) => {
    const extPanelBody = extPanelWindow.document.body;
    const main = extPanelBody.querySelector('main');
    const confirmDialog = extPanelBody.querySelector('.confirm-dialog');
    const errorDialog = extPanelBody.querySelector('.error-dialog');
    
    const deleteSpanOnClick = (clickEvent) =>  {
        confirmDialog.querySelector('span').textContent = clickEvent.target.dataset.kind;
        confirmDialog.querySelector('code').textContent = clickEvent.target.dataset.key;
        confirmDialog.addEventListener('close', (_event) => 
            {           
                if (confirmDialog.returnValue === 'delete') {
                    browser.tabs.sendMessage(
                        browser.devtools.inspectedWindow.tabId,
                        {
                            message: `delete${["File","Directory"].find(
                                (type) => type.toLowerCase() === clickEvent.target.dataset.kind
                            )}`,
                            data: clickEvent.target.dataset.relativePath,
                        },
                        (response) => {
                            if (response.error) {
                                errorDialog.querySelector('p').textContent = response.error;
                                return errorDialog.showModal();
                            }
                            clickEvent.target.parent.remove();
                        },
                    );
                }
            },
            { once: true },
        );
        confirmDialog.showModal();
    };
       
    const createByKind = {
        file(key, { kind, relativePath, size, lastModified, type }, container){
            const div = createEl('div',{ 
                class: value.kind, 
                tabIndex: 0, 
                title: `Type: ${
                type || 'Unknown'
                } - Last modified: ${new Date(lastModified).toLocaleString()}`,
                innerHTML: `<span>${key}</span><span class="size">${
                    readableSize(size)
                }</span><span class="delete">🗑️</span>`,
            });
            
            container.append(div);
            
            applyEl(div.firstChild, { 
                dataset: { relativePath: kind },
                onclick: (event) => browser.tabs.sendMessage(
                    browser.devtools.inspectedWindow.tabId, 
                    {
                        message: 'saveFile',
                        data: event.target.dataset.relativePath,
                    }
                )
            });
            
            applyEl(div.querySelector('.delete'), { 
                onclick: deleteSpanOnClick, 
                dataset: { kind, relativePath }, 
            });
        },
        directory(key, { kind, relativePath, entries }, container){
            
            const details = createEl('details', { 
                open: true, class: 'root', innerHTML: `<summary class="${kind}">${
                relativePath === '.' 
                    ? ' ' 
                    : `<span>${key}</span><span class="delete">🗑️</span>`
            }<div></div></summary>`});
    
            container.append(details);
            
            details.querySelector('.delete') && applyEl(details.querySelector('.delete'), { 
                onclick: deleteSpanOnClick, 
                dataset: { kind, relativePath }, 
            });
            
            createTreeHTML(entries, details.querySelector('div'));
        },
    };
    
    browser.tabs.sendMessage(
        browser.devtools.inspectedWindow.tabId,
        { message: 'getDirectoryStructure' },
        (response) => {
            // Naive check to avoid unnecessary DOM updates.
            const newLength = response.structure && JSON.stringify(response.structure).length;
            if (newLength && main.dataset.lastLength !== newLength) {
                main.dataset.lastLength = newLength;
                
                if (Object.keys(response.structure).length === 0) {
                    main.innerHTML = '<span>🫙</span> Origin Private File System is empty.';
                    return;
                };
                
                const container = document.createElement('div');
                
                main.innerHTML = '';
                main.append(container);
                main.addEventListener('keydown', (event) => {
                    if (event.target.nodeName === 'SUMMARY' && (
                        event.key === 'ArrowRight' || event.key === 'ArrowLeft'
                    )) {                    
                        event.target.parentElement.open = event.key === 'ArrowRight';
                    }
                });
                
                const entries = Object.entries(response.structure)
                .sort(([name], [nextName]) => {
                    if (name === nextName) return 0;
                    return name < nextName ? -1 : 1;
                })
                .sort(([,{kind}], [,{ kind: {nextKind} }]) => {
                    if (kind === nextKind) return 0;
                    return kind < nextKind ? -1 : 1;
                });
                
                for (const [key, value] of entries) {
                    createByKind[value.kind](key, value, container);
                };
            };
        }
    );
};

browser.devtools.panels.create(
    'OPFS Explorer',
    'icon128.png',
    'panel.html',
    (panel) => {
        let interval;
        panel.onShown.addListener((extPanelWindow) => {          
            // <main><span class="spinner">⏳</span> Analyzing Origin Private File System</main>
            // mainInnerHTML = extPanelWindow.document.body.querySelector('main').innerHTML;
            extPanelWindow.document.body.querySelector('main').dataset.lastLength = 0;
            extPanelWindow.document.body.querySelector('main').dataset.refresh = true;
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
                    extPanelWindow.document.body.querySelector('main').dataset.lastLength = 0;
                    refreshTree(extPanelWindow);
                }
            });

            refreshTree(extPanelWindow);
            interval = setInterval(()=>refreshTree(extPanelWindow), 3000);
        });

        panel.onHidden.addListener(() => {
            clearInterval(interval);
        });
    }
);
