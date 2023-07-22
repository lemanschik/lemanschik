import { getServerHosForLibResolution } from "../helpers/libraryResolution";
import {
    baselineTsserverLogs,
    createLoggerWithInMemoryLogs,
    createSession,
    openFilesForSession
} from "../helpers/tsserver";

describe("unittests:: tsserver:: libraryResolution", () => {
    it("with config", () => {
        const host = getServerHosForLibResolution();
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
        openFilesForSession(["/home/src/projects/project1/index.ts"], session);
        host.ensureFileOrFolder({ path: "/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts", content: "interface DOMInterface { }" });
        host.runQueuedTimeoutCallbacks();
        host.runQueuedTimeoutCallbacks();
        host.appendFile("/home/src/projects/project1/file.ts", "export const xyz = 10;");
        host.runQueuedTimeoutCallbacks();
        host.deleteFile("/home/src/projects/project1/core.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.deleteFile("/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.writeFile("/home/src/projects/project1/tsconfig.json", JSON.stringify({
            compilerOptions: {
                composite: true,
                typeRoots: ["./typeroot1", "./typeroot2"],
                lib: ["es5", "dom"],
                traceResolution: true,
            },
        }));
        host.runQueuedTimeoutCallbacks();
        host.writeFile("/home/src/projects/project1/tsconfig.json", JSON.stringify({
            compilerOptions: {
                composite: true,
                typeRoots: ["./typeroot1"],
                lib: ["es5", "dom"],
                traceResolution: true,
            },
        }));
        host.ensureFileOrFolder({ path: "/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts", content: "interface DOMInterface { }" });
        host.runQueuedTimeoutCallbacks();
        host.ensureFileOrFolder({ path: "/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts", content: "interface WebWorkerInterface { }" });
        host.runQueuedTimeoutCallbacks();
        host.runQueuedTimeoutCallbacks();
        host.deleteFile("/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts");
        host.runQueuedTimeoutCallbacks();
        baselineTsserverLogs("libraryResolution", "with config", session);
    });
    it("with config with redirection", () => {
        const host = getServerHosForLibResolution(/*libRedirection*/ true);
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
        openFilesForSession(["/home/src/projects/project1/index.ts"], session);
        host.deleteFile("/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.appendFile("/home/src/projects/project1/file.ts", "export const xyz = 10;");
        host.runQueuedTimeoutCallbacks();
        host.deleteFile("/home/src/projects/project1/core.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.ensureFileOrFolder({ path: "/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts", content: "interface DOMInterface { }" });
        host.runQueuedTimeoutCallbacks();
        host.runQueuedTimeoutCallbacks();
        host.writeFile("/home/src/projects/project1/tsconfig.json", JSON.stringify({
            compilerOptions: {
                composite: true,
                typeRoots: ["./typeroot1", "./typeroot2"],
                lib: ["es5", "dom"],
                traceResolution: true,
            },
        }));
        host.runQueuedTimeoutCallbacks();
        host.writeFile("/home/src/projects/project1/tsconfig.json", JSON.stringify({
            compilerOptions: {
                composite: true,
                typeRoots: ["./typeroot1"],
                lib: ["es5", "dom"],
                traceResolution: true,
            },
        }));
        host.deleteFile("/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.deleteFile("/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts");
        host.runQueuedTimeoutCallbacks();
        host.ensureFileOrFolder({ path: "/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts", content: "interface WebWorkerInterface { }" });
        host.runQueuedTimeoutCallbacks();
        host.runQueuedTimeoutCallbacks();
        baselineTsserverLogs("libraryResolution", "with config with redirection", session);
    });
});