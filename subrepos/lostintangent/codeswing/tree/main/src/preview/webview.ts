import axios from "axios";
import themeStyles from "raw-loader!./stylesheets/themeStyles.css";
import * as vscode from "vscode";
import { openSwing } from ".";
import * as config from "../config";
import { URI_PATTERN } from "../constants";
import { store, SwingLibraryType, SwingManifest } from "../store";
import { byteArrayToString } from "../utils";
import { getScriptContent } from "./languages/script";
import { getCdnJsLibraries } from "./libraries/cdnjs";
import { ProxyFileSystemProvider } from "./proxyFileSystemProvider";
import { storage } from "./tutorials/storage";

const EXIT_RESPONSE = "Exit Swing";

export class SwingWebView {
  private css: string = "";
  private html: string = "";
  private javascript: string = "";
  private isJavaScriptModule: boolean = false;
  private manifest: SwingManifest | undefined;
  private readme: string = "";
  private config: string = "";
  private input: string = "";

  constructor(
    private webview: vscode.Webview,
    private output: vscode.OutputChannel,
    private swing: vscode.Uri,
    private codePenScripts: string = "",
    private codePenStyles: string = "",
    private totalTutorialSteps?: number,
    private tutorialTitle?: string
  ) {
    webview.onDidReceiveMessage(async ({ command, value }) => {
      switch (command) {
        case "alert":
          if (value) {
            vscode.window.showInformationMessage(value);
          }
          break;

        case "clear":
          output.clear();
          break;

        case "log":
          output.appendLine(value);
          break;

        case "httpRequest": {
          let response;
          if (value.url.startsWith("http")) {
            response = await axios.request({
              url: value.url,
              method: value.method,
              data: value.body,
              headers: JSON.parse(value.headers || "{}"),
              responseType: value.responseType || "text",
              transformResponse: (data) => data,
            });
          } else {
            const uri = vscode.Uri.joinPath(this.swing, value.url);
            const contents = await vscode.workspace.fs.readFile(uri);
            response = {
              data: byteArrayToString(contents),
              status: 200,
              statusText: "OK",
            };
          }

          const body =
            value.responseType === "arraybuffer"
              ? byteArrayToString(response.data)
              : response.data;

          webview.postMessage({
            command: "httpResponse",
            value: {
              id: value.id,
              body,
              responseType: value.responseType,
              status: response.status,
              statusText: response.statusText,
              source: value.source,
              headers: JSON.stringify(response.headers || {}),
            },
          });
          break;
        }

        case "navigateCode": {
          const file = vscode.Uri.joinPath(swing, value.file);
          let editor = vscode.window.visibleTextEditors.find(
            (editor) => editor.document.uri.toString() === file.toString()
          );

          const line = value.line - 1;
          const column = value.column - 1;
          const range = new vscode.Range(line, column, line, 1000);

          if (editor) {
            editor.selection = new vscode.Selection(range.start, range.end);
          } else {
            editor = await vscode.window.showTextDocument(file, {
              selection: range,
              preserveFocus: false,
            });
          }

          editor.revealRange(range);
          break;
        }

        case "navigateTutorial": {
          const currentStep = storage.currentTutorialStep();
          const nextStep = currentStep + value;

          // Save all open files, to prevent the user
          // from getting a save dialog upon navigation.
          await vscode.workspace.saveAll();

          if (nextStep <= this.totalTutorialSteps!) {
            await storage.setCurrentTutorialStep(nextStep);
            openSwing(store.activeSwing!.rootUri);
          } else {
            const completionMessage =
              this.manifest!.input && this.manifest!.input!.completionMessage
                ? this.manifest!.input!.completionMessage
                : "Congratulations! You're completed this tutorial";

            const response = await vscode.window.showInformationMessage(
              completionMessage,
              { modal: true },
              EXIT_RESPONSE
            );

            if (response === EXIT_RESPONSE) {
              return store.activeSwing?.webViewPanel.dispose();
            }
          }
          break;
        }

        case "openUrl": {
          if ((value as string).startsWith("http")) {
            vscode.env.openExternal(vscode.Uri.parse(value));
          } else {
            const uri = vscode.Uri.joinPath(store.activeSwing!.rootUri, value);
            await vscode.commands.executeCommand(
              "simpleBrowser.api.open",
              uri,
              {
                viewColumn: vscode.ViewColumn.Beside,
              }
            );
          }
          break;
        }
      }
    });
  }

  public updateCSS(css: string, rebuild = false) {
    this.css = css;

    if (rebuild) {
      this.webview.postMessage({ command: "updateCSS", value: css });
    }
  }

  public updateInput(input: string, rebuild = false) {
    this.input = input;

    if (rebuild) {
      this.webview.postMessage({ command: "updateInput", value: input });
    }
  }

  public async updateReadme(readme: string, rebuild = false) {
    this.readme = readme;

    if (rebuild) {
      await this.rebuildWebview();
    }
  }

  public async updateConfig(config: string, rebuild = false) {
    this.config = config;

    if (rebuild) {
      await this.rebuildWebview();
    }
  }

  public async updateHTML(html: string, rebuild = false) {
    this.html = html;

    if (rebuild) {
      await this.rebuildWebview();
    }
  }

  public async updateJavaScript(
    textDocument: vscode.TextDocument,
    rebuild = false
  ) {
    const data = getScriptContent(textDocument, this.manifest);
    if (data === null) {
      return;
    }

    this.javascript = data[0];
    this.isJavaScriptModule = data[1];

    if (rebuild) {
      await this.rebuildWebview();
    }
  }

  public async updateManifest(manifest: string, rebuild = false) {
    if (!manifest) {
      return;
    }

    try {
      this.manifest = JSON.parse(manifest);

      if (rebuild) {
        await this.rebuildWebview();
      }
    } catch (e) {
      // The user might have typed invalid JSON
    }
  }

  private async resolveLibraries(libraryType: SwingLibraryType) {
    let libraries =
      libraryType === SwingLibraryType.script
        ? this.codePenScripts
        : this.codePenStyles;

    if (
      !this.manifest ||
      !this.manifest[libraryType] ||
      this.manifest[libraryType]!.length === 0
    ) {
      return libraries;
    }

    await Promise.all(
      this.manifest![libraryType]!.map(async (library) => {
        if (!library || (library && !library.trim())) {
          return;
        }

        const appendLibrary = (url: string) => {
          if (libraryType === SwingLibraryType.style) {
            libraries += `<link href="${url}" rel="stylesheet" />`;
          } else {
            libraries += `<script src="${url}"></script>`;
          }
        };

        const isUrl = library.match(URI_PATTERN);
        if (isUrl) {
          appendLibrary(library);
        } else {
          const libraries = await getCdnJsLibraries();
          const libraryEntry = libraries.find((lib) => lib.name === library);

          if (!libraryEntry) {
            return;
          }

          appendLibrary(libraryEntry.latest);
        }
      })
    );

    return libraries;
  }

  public async rebuildWebview() {
    if (config.get("clearConsoleOnRun")) {
      this.output.clear();
    }

    // The URL needs to have a trailing slash, or end the URLs could get messed up.
    const baseUrl = this.webview
      .asWebviewUri(
        ProxyFileSystemProvider.getProxyUri(
          vscode.Uri.joinPath(this.swing, "/")
        )
      )
      .toString();
    const styleId = `swing-style-${Math.random()}`;

    const scripts = await this.resolveLibraries(SwingLibraryType.script);
    const styles = await this.resolveLibraries(SwingLibraryType.style);

    const scriptType = this.isJavaScriptModule
      ? "module"
      : (this.manifest?.scriptType || "text/javascript");

    const readmeBehavior =
      (this.manifest && this.manifest.readmeBehavior) ||
      (await config.get("readmeBehavior"));

    const header = readmeBehavior === "previewHeader" ? this.readme : "";
    const footer = readmeBehavior === "previewFooter" ? this.readme : "";

    const shouldUseThemeStyles =
      this.manifest?.themePreview ?? config.get("themePreview");

    // TODO: Refactor this out to a "tutorial renderer" that
    // can handle all of the tutorial-specific UI and behavior
    let title = "";
    let tutorialNavigation = "";
    if (this.totalTutorialSteps) {
      const currentTutorialStep = storage.currentTutorialStep();
      if (this.tutorialTitle) {
        title = `<span style='font-weight: bold'>${this.tutorialTitle}</span>`;
      }
      const frame = `<html>
    <head>
      <style>

        navigation {
          display: flex;
          justify-content: space-between;
        }

        input {
          width: 16px;
          height: 16px; 
        }

        span {
          margin: 0 5px;
        }

        ${shouldUseThemeStyles ? themeStyles : ""}

      </style>
      <script>

      function navigateTutorial(step) {
        parent.postMessage({
          command: 'navigateTutorial',
          value: step
        }, '*');
      }

      </script>
    </head>
    <body>
      <navigation>
      ${title}
      <div>
      <input type='image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAgoUDA9zWRkBAAAEjUlEQVRo3sWZ228UVRzHP7su1JRd2pJCjEiDIYHiBVvCK38AJiQ08mI0aoyX8tRSmkKhlCYYa68JiW+GBGxShcR4eVNSFE00GgOBQtiCD7hFkJZesPsgxe760JkzZy47c87s7PKbh539nfP7fn/n+vudMzF0ZR07eYF6NlNDNUkgyzxzTJDmGj8yrY2oLDsYZpwceZ8nxxWG2B41dYo2rvkSO5+r7CcZDXkNPcxokZvPfbqpDoKPBZS+RR9rXfo50qSZJMsDoIokddRT70F3jw5GyIdr+yZ+crTpP76lhRcLuB1jG62cY8lhdYFnw9DvZd4GM0kHTytZrucQt222czTpkccYsAHc4h1WaiFU8B4Z2+roDRhuSRKclEwXORFyPlfSw78S0ggrVMxW8I1kdJ1tochNaWBCQvuaRHDnj0gGoxGs5RRnJMRTQQMhj32/+qgFNGpIQu31q7pXqtgZCbkpXdJ03FOo0iZp4fVFSg8wKC1Kz30hJm07n0XU+XZ8ay5874X/tii+werI6QGSXBccrzsLa5gyih7yUknoARpZNFj+pspe1CN8+1AR7DleZpW2C9YqOyKrUyLg3qJSCaiLJfKktQcryaTBNC3vMW3Cr3eVYKz+ekO7D5qFbaulHBcRr0KLPs8ubQcqRKS8aqp2CLiDmvRnQy3Xw8K+YVkxLNKN9Vr0X6hFN5dsEClL/7LCHIDvykIPcN7AuASwTiTarWWih3YRF2rhFQHqH/mjo4dGgdQEx0SI8JtQUdJDXIS9ozBqvP5cNnqAX0Waxu8iVykfPXxq4P2WoNZQZQrSHxPvlxnQyhFz/MGCZ8mfxm8tIgq0e1Y84Dhk6D5ZdnvidpgRIS5CQtaj2ko+KLKrVxXIrf4xflPxIgmCJeBcGBct90rAFzlaJH2WDk+9GcYXEiywxqayyyBJ2yRs5pEGfY6bnkMLKdOBx7UMT5vL0NqIfvGpXtKNqFtsxX4TslRbcZccjPyz4ZIFo7WPMRwvLe/DV4y/5wINo05ILi7/HRL+PFMWF6yUzNgltwvIQwrmsgtnQiWlne5ZZw7CHZ7UdKGYtHzcUu4XgO8rgRRzMNknbFssZZL7hjKjeN4zj2Yppdoyk9n+KTtTt/DrI0WorexSPEfKYl1TOG5gqrlnFCya55USiHU8v+PuuzeFbzdLdkGRFhyvuotjXChyeflLjLMCf8y7Sp10Lf9x5A5YV3WzbCxUqUn6HnJEAzxY5Gu63X4Ve6VNZjCyi8phCfV4UOVTUuXPtde5W1ZLY5/nZHCjEnwlGUwUuSgbuSGhfRl8WQ3wBJ9IRo84EbIfKunhoYR0Wj16xui1fZ7L0Kx0e2RJBftsX01yHNedUXuYtR2ybtOpkC8AbKCTv2y2M/4zv5Bs5AfHSW+JMdpoKJC+xmnkAOddH63GqPPrbP+heI0BnnLpH5BmggwLzAPVpKijni3O61fgLu2Mhmm9JVV0Me069ao8UxyOYBkDkKRVZE1qz2VaQtwkB0gD/VxyjbBzllykT+e+XX+zrWUnz7OVzayRPt/Pis/3M3pw/wOLMZPuD5psfQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0xMFQyMDoxMjoxNSswMDowMEUJTykAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMTBUMjA6MTI6MTUrMDA6MDA0VPeVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==' onclick='navigateTutorial(-1)'${
        currentTutorialStep === 1 ? "disabled" : ""
      } />
      <span>Step ${currentTutorialStep} of ${this.totalTutorialSteps}</span>
      <input type='image' src='data:image/png;base64,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' onclick='navigateTutorial(1)'${
        currentTutorialStep === this.totalTutorialSteps ? "disabled" : ""
      } />
      </div>
      </navigation>
    </body>
</html>
`;

      tutorialNavigation = `<iframe id="tutorial-navigation" srcdoc="${frame}"></iframe>`;
    }

    this.webview.html = `<html>
  <head>
    <base href="${baseUrl}" />
    <meta charset="UTF-8" />
    <style>

      html, body {
        height: 100%;
        width: 100%;
      }
      
      body {
        background-color: white;
        font-size: var(---vscode-font-size);
        padding: 0;
      }

      iframe#tutorial-navigation {
        height: 30px;
        width: calc(100% - 20px);
        border: none;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
      }
      ${shouldUseThemeStyles ? themeStyles : ""}
    </style>
    ${styles}
    <style id="${styleId}">
      ${this.css}
    </style>
    <script src="https://cdn.jsdelivr.net/npm/mock-xmlhttprequest@5.1.0/dist/mock-xmlhttprequest.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fetch-mock/es5/client-bundle.js"></script>
    <script>

    // Wrap this code in braces, so that none of the variables
    // conflict with variables created by a swing's scripts.
    {
      document.getElementById("_defaultStyles").remove();

      const vscode = acquireVsCodeApi();
      const style = document.getElementById("${styleId}");
      
      window.addEventListener("DOMContentLoaded", () => {
        const linkedStyle = document.querySelector("link[href='style.css']");
        if (linkedStyle) {
          linkedStyle.parentElement.removeChild(linkedStyle);
        }

        const linkedScript = document.querySelector("script[src='script.js']");
        if (linkedScript) {
          linkedScript.parentElement.removeChild(linkedScript);
        }
      });
  
      let httpRequestId = 1;
      const pendingHttpRequests = new Map();
      const pendingFetchRequests = new Map();

      window.addEventListener("message", ({ data }) => {  
        if (data.command === "updateCSS") {
          style.textContent = data.value;
        } else if (data.command === "httpResponse") {
          const id = data.value.id;
          const status = data.value.status;
          const headers = JSON.parse(data.value.headers);

          // TODO: Add support for other response types
          const body = data.value.responseType === "arraybuffer" ? new TextEncoder().encode(data.value.body).buffer : data.value.body;

          if (data.value.source === "fetch") { 
            const resolve = pendingFetchRequests.get(id);
            resolve(new Response(body, { status, headers }));
            pendingFetchRequests.delete(id);
          } else {
            const xhr = pendingHttpRequests.get(id);
            xhr.respond(status, headers, body, data.value.statusText);
            pendingHttpRequests.delete(id);
          }
        } else if (data.command === "updateInput") {
          triggerInput(data.value)
        } else if (data.command === "navigateTutorial") {
          navigateTutorial(data.value);
        }
      });
    
      function navigateTutorial(step) {
        vscode.postMessage({
          command: "navigateTutorial",
          value: step
        });
      }

      function triggerInput(input) {
        if (window.checkInput && window.checkInput(input)) {
          navigateTutorial(1);
        }
      }

      function serializeMessage(message) {
        if (typeof message === "string") {
          return message;
        } else {
          return JSON.stringify(message);
        }
      }

      window.alert = (message) => {
        const value = serializeMessage(message);
        vscode.postMessage({
          command: "alert",
          value
        });
      };

      window.open = (url) => {
        vscode.postMessage({
          command: "openUrl",
          value: url
        });
      }

      console.clear = () => {
        vscode.postMessage({
          command: "clear",
          value: ""
        });
      };

      const originalLog = console.log;
      console.log = (...args) => {
        const value = (args || [undefined]).map(serializeMessage).join('\\t');
        vscode.postMessage({
          command: "log",
          value
        });
        
        originalLog.call(console, ...args);
      };

      // TODO: Add support for sending FormData, URLSearchParams,
      // ArrayBuffer, or Blob objects as the request body.
      const mockXHRServer = MockXMLHttpRequest.newServer();
      mockXHRServer.setDefaultHandler((xhr) => {
        pendingHttpRequests.set(httpRequestId, xhr);
        vscode.postMessage({
          command: "httpRequest",
          value: {
            id: httpRequestId++,
            url: xhr.url,
            method: xhr.method,
            body: xhr.body,
            responseType: xhr.responseType,
            headers: JSON.stringify(xhr.headers || {}),
            source: "xhr"
          }
        });
      });
      mockXHRServer.install(window);

      fetchMock.any((url, options = {}) => {
        return new Promise(async (resolve) => {
          pendingFetchRequests.set(httpRequestId, resolve);
          vscode.postMessage({
            command: "httpRequest",
            value: {
              id: httpRequestId++,
              url,
              method: options.method,
              body: options.body,
              headers: JSON.stringify(options.headers || {}),
              source: "fetch"
            }
          });
        });
      });

      const LINK_PREFIX = "swing:";
      document.addEventListener("click", (e) => {
        if (e.target.href) {
          e.preventDefault();

          if (e.target.href.startsWith(LINK_PREFIX)) {
            const href = e.target.href.replace(LINK_PREFIX, "");
            const [file, lineColumn] = href.split("@");
            const [line, column] = lineColumn ? lineColumn.split(":") : [];

            vscode.postMessage({
              command: "navigateCode",
              value: {
                file, 
                line: Number(line) || 1,
                column: Number(column) || 1
              }
            });
          } else if (!e.target.href.startsWith("http")) {
            vscode.postMessage({
              command: "openUrl",
              value: e.target.href
            });
          }
        }
      });

      const config = \`${this.config}\`;
      if (config) {
        try {
        window.config = JSON.parse(config);
        } catch {
          alert("The swing's config file ins't valid JSON.");
        }
      }

      const input = "${this.input}";
      if (input) {
        triggerInput(input);
      }
    }

    </script>
  </head>
  <body>
    ${scripts}
    ${tutorialNavigation}
    ${header}
    ${this.html}
    ${footer}
    <script type="${scriptType}">
      ${this.javascript}
    </script>
  </body>
</html>`;
  }
}
