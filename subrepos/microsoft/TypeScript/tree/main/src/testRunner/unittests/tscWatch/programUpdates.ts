import * as Harness from "../../_namespaces/Harness";
import * as ts from "../../_namespaces/ts";
import { commandLineCallbacks } from "../helpers/baseline";
import { compilerOptionsToConfigJson } from "../helpers/contents";
import {
    commonFile1,
    commonFile2,
    createBaseline,
    createWatchCompilerHostOfFilesAndCompilerOptionsForBaseline,
    noopChange,
    runWatchBaseline,
    TscWatchCompileChange,
    verifyTscWatch,
    watchBaseline,
} from "../helpers/tscWatch";
import {
    createWatchedSystem,
    File,
    libFile,
    SymLink,
    TestServerHost,
} from "../helpers/virtualFileSystemWithWatch";

describe("unittests:: tsc-watch:: program updates", () => {
    const scenario = "programUpdates";
    const configFilePath = "/a/b/tsconfig.json";
    const configFile: File = {
        path: configFilePath,
        content: `{}`
    };
    verifyTscWatch({
        scenario,
        subScenario: "create watch without config file",
        commandLineArgs: ["-w", "/a/b/c/app.ts"],
        sys: () => {
            const appFile: File = {
                path: "/a/b/c/app.ts",
                content: `
                import {f} from "./module"
                console.log(f)
                `
            };

            const moduleFile: File = {
                path: "/a/b/c/module.d.ts",
                content: `export let x: number`
            };
            return createWatchedSystem([appFile, moduleFile, libFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "can handle tsconfig file name with difference casing",
        commandLineArgs: ["-w", "-p", "/A/B/tsconfig.json"],
        sys: () => {
            const f1 = {
                path: "/a/b/app.ts",
                content: "let x = 1"
            };
            const config = {
                path: configFilePath,
                content: JSON.stringify({
                    include: ["app.ts"]
                })
            };
            return createWatchedSystem([f1, libFile, config], { useCaseSensitiveFileNames: false });
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "create configured project without file list",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `
                {
                    "compilerOptions": {},
                    "exclude": [
                        "e"
                    ]
                }`
            };
            const file1: File = {
                path: "/a/b/c/f1.ts",
                content: "let x = 1"
            };
            const file2: File = {
                path: "/a/b/d/f2.ts",
                content: "let y = 1"
            };
            const file3: File = {
                path: "/a/b/e/f3.ts",
                content: "let z = 1"
            };
            return createWatchedSystem([configFile, libFile, file1, file2, file3]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "add new files to a configured program without file list",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => createWatchedSystem([commonFile1, libFile, configFile]),
        edits: [
            {
                caption: "Create commonFile2",
                edit: sys => sys.writeFile(commonFile2.path, commonFile2.content),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "should ignore non-existing files specified in the config file",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `{
                    "compilerOptions": {},
                    "files": [
                        "commonFile1.ts",
                        "commonFile3.ts"
                    ]
                }`
            };
            return createWatchedSystem([commonFile1, commonFile2, libFile, configFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "handle recreated files correctly",
        commandLineArgs: ["-w", "-p", configFilePath, "--explainFiles"],
        sys: () => {
            return createWatchedSystem([libFile, commonFile1, commonFile2, configFile]);
        },
        edits: [
            {
                caption: "change file to ensure signatures are updated",
                edit: sys => sys.appendFile(commonFile2.path, ";let xy = 10;"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "delete file2",
                edit: sys => sys.deleteFile(commonFile2.path),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "recreate file2",
                edit: sys => sys.writeFile(commonFile2.path, commonFile2.content),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "handles the missing files - that were added to program because they were added with tripleSlashRefs",
        commandLineArgs: ["-w", "/a/b/commonFile1.ts"],
        sys: () => {
            const file1: File = {
                path: commonFile1.path,
                content: `/// <reference path="commonFile2.ts"/>
                    let x = y`
            };
            return createWatchedSystem([file1, libFile]);
        },
        edits: [
            {
                caption: "create file2",
                edit: sys => sys.writeFile(commonFile2.path, commonFile2.content),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "should reflect change in config file",
        commandLineArgs: ["-w", "-p", configFilePath, "--explainFiles"],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `{
                    "compilerOptions": {},
                    "files": ["${commonFile1.path}", "${commonFile2.path}"]
                }`
            };
            return createWatchedSystem([libFile, commonFile1, commonFile2, configFile]);
        },
        edits: [
            {
                caption: "change file to ensure signatures are updated",
                edit: sys => sys.appendFile(commonFile2.path, ";let xy = 10;"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Change config",
                edit: sys => sys.writeFile(configFilePath, `{
                        "compilerOptions": {},
                        "files": ["${commonFile1.path}"]
                    }`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "works correctly when config file is changed but its content havent",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `{
                        "compilerOptions": {},
                        "files": ["${commonFile1.path}", "${commonFile2.path}"]
                    }`
            };
            return createWatchedSystem([libFile, commonFile1, commonFile2, configFile]);
        },
        edits: [
            {
                caption: "Modify config without changing content",
                edit: sys => sys.modifyFile(configFilePath, `{
                        "compilerOptions": {},
                        "files": ["${commonFile1.path}", "${commonFile2.path}"]
                    }`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "Updates diagnostics when '--noUnusedLabels' changes",
        commandLineArgs: ["-w", "-p", "/tsconfig.json"],
        sys: () => {
            const aTs: File = {
                path: "/a.ts",
                content: "label: while (1) {}"
            };
            const tsconfig: File = {
                path: "/tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: { allowUnusedLabels: true }
                })
            };
            return createWatchedSystem([libFile, aTs, tsconfig]);
        },
        edits: [
            {
                caption: "Disable  allowUnsusedLabels",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { allowUnusedLabels: false }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Enable  allowUnsusedLabels",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { allowUnusedLabels: true }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "Updates diagnostics when '--allowArbitraryExtensions' changes",
        commandLineArgs: ["-w", "-p", "/tsconfig.json"],
        sys: () => {
            const aTs: File = {
                path: "/a.ts",
                content: "import {} from './b.css'"
            };
            const bCssTs: File = {
                path: "/b.d.css.ts",
                content: "declare const style: string;"
            };
            const tsconfig: File = {
                path: "/tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: { allowArbitraryExtensions: true },
                    files: ["/a.ts"],
                })
            };
            return createWatchedSystem([libFile, aTs, bCssTs, tsconfig]);
        },
        edits: [
            {
                caption: "Disable  allowArbitraryExtensions",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { allowArbitraryExtensions: false },
                    files: ["/a.ts"],
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Enable  allowArbitraryExtensions",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { allowArbitraryExtensions: true },
                    files: ["/a.ts"],
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates diagnostics and emit for decorators",
        commandLineArgs: ["-w"],
        sys: () => {
            const aTs: File = {
                path: "/a.ts",
                content: `import {B} from './b'
@((_) => {})
export class A {
    constructor(p: B) {}
}`,
            };
            const bTs: File = {
                path: "/b.ts",
                content: `export class B {}`,
            };
            const tsconfig: File = {
                path: "/tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: { target: "es6", importsNotUsedAsValues: "error" }
                })
            };
            return createWatchedSystem([libFile, aTs, bTs, tsconfig]);
        },
        edits: [
            {
                caption: "Enable experimentalDecorators",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { target: "es6", importsNotUsedAsValues: "error", experimentalDecorators: true }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),

            },
            {
                caption: "Enable emitDecoratorMetadata",
                edit: sys => sys.modifyFile("/tsconfig.json", JSON.stringify({
                    compilerOptions: { target: "es6", importsNotUsedAsValues: "error", experimentalDecorators: true, emitDecoratorMetadata: true }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "files explicitly excluded in config file",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `{
                    "compilerOptions": {},
                    "exclude": ["/a/c"]
                }`
            };
            const excludedFile1: File = {
                path: "/a/c/excluedFile1.ts",
                content: `let t = 1;`
            };
            return createWatchedSystem([libFile, commonFile1, commonFile2, excludedFile1, configFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "should properly handle module resolution changes in config file",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1: File = {
                path: "/a/b/file1.ts",
                content: `import { T } from "module1";`
            };
            const nodeModuleFile: File = {
                path: "/a/b/node_modules/module1.ts",
                content: `export interface T {}`
            };
            const classicModuleFile: File = {
                path: "/a/module1.ts",
                content: `export interface T {}`
            };
            const configFile: File = {
                path: configFilePath,
                content: `{
                    "compilerOptions": {
                        "moduleResolution": "node"
                    },
                    "files": ["${file1.path}"]
                }`
            };
            return createWatchedSystem([libFile, file1, nodeModuleFile, classicModuleFile, configFile]);
        },
        edits: [
            {
                caption: "Change module resolution to classic",
                edit: sys => sys.writeFile(configFile.path, `{
                        "compilerOptions": {
                            "moduleResolution": "classic"
                        },
                        "files": ["/a/b/file1.ts"]
                    }`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "should tolerate config file errors and still try to build a project",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile: File = {
                path: configFilePath,
                content: `{
                        "compilerOptions": {
                            "module": "none",
                            "allowAnything": true
                        },
                        "someOtherProperty": {}
                    }`
            };
            return createWatchedSystem([commonFile1, commonFile2, libFile, configFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "changes in files are reflected in project structure",
        commandLineArgs: ["-w", "/a/b/f1.ts", "--explainFiles"],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: `export * from "./f2"`
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: `export let x = 1`
            };
            const file3 = {
                path: "/a/c/f3.ts",
                content: `export let y = 1;`
            };
            return createWatchedSystem([file1, file2, file3, libFile]);
        },
        edits: [
            {
                caption: "Modify f2 to include f3",
                // now inferred project should inclule file3
                edit: sys => sys.modifyFile("/a/b/f2.ts", `export * from "../c/f3"`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "deleted files affect project structure",
        commandLineArgs: ["-w", "/a/b/f1.ts", "--noImplicitAny"],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: `export * from "./f2"`
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: `export * from "../c/f3"`
            };
            const file3 = {
                path: "/a/c/f3.ts",
                content: `export let y = 1;`
            };
            return createWatchedSystem([file1, file2, file3, libFile]);
        },
        edits: [
            {
                caption: "Delete f2",
                edit: sys => sys.deleteFile("/a/b/f2.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "deleted files affect project structure-2",
        commandLineArgs: ["-w", "/a/b/f1.ts", "/a/c/f3.ts", "--noImplicitAny"],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: `export * from "./f2"`
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: `export * from "../c/f3"`
            };
            const file3 = {
                path: "/a/c/f3.ts",
                content: `export let y = 1;`
            };
            return createWatchedSystem([file1, file2, file3, libFile]);
        },
        edits: [
            {
                caption: "Delete f2",
                edit: sys => sys.deleteFile("/a/b/f2.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "config file includes the file",
        commandLineArgs: ["-w", "-p", "/a/c/tsconfig.json"],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "export let x = 5"
            };
            const file2 = {
                path: "/a/c/f2.ts",
                content: `import {x} from "../b/f1"`
            };
            const file3 = {
                path: "/a/c/f3.ts",
                content: "export let y = 1"
            };
            const configFile = {
                path: "/a/c/tsconfig.json",
                content: JSON.stringify({ compilerOptions: {}, files: ["f2.ts", "f3.ts"] })
            };
            return createWatchedSystem([file1, file2, file3, libFile, configFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "change module to none",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "export {}\ndeclare global {}"
            };
            return createWatchedSystem([file1, libFile, configFile]);
        },
        edits: [{
            caption: "change `module` to 'none'",
            timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            edit: sys => {
                sys.writeFile(configFilePath, JSON.stringify({ compilerOptions: { module: "none" } }));
            }
        }]
    });

    it("two watch programs are not affected by each other", () => {
        const file1 = {
            path: "/a/b/f1.ts",
            content: `
                export * from "../c/f2";
                export * from "../d/f3";`
        };
        const file2 = {
            path: "/a/c/f2.ts",
            content: "export let x = 1;"
        };
        const file3 = {
            path: "/a/d/f3.ts",
            content: "export let y = 1;"
        };
        const { sys, baseline, oldSnap, cb, getPrograms } = createBaseline(createWatchedSystem([libFile, file1, file2, file3]));
        const host = createWatchCompilerHostOfFilesAndCompilerOptionsForBaseline({
            rootFiles: [file2.path, file3.path],
            system: sys,
            options: { allowNonTsExtensions: true },
            cb,
            watchOptions: undefined
        });
        ts.createWatchProgram(host);
        baseline.push(`${sys.getExecutingFilePath()} --w ${file2.path} ${file3.path}`);
        watchBaseline({
            baseline,
            getPrograms,
            oldPrograms: ts.emptyArray,
            sys,
            oldSnap,
        });

        const {cb: cb2, getPrograms: getPrograms2 } = commandLineCallbacks(sys);
        const oldSnap2 = sys.snap();
        baseline.push("createing separate watcher");
        ts.createWatchProgram(createWatchCompilerHostOfFilesAndCompilerOptionsForBaseline({
            rootFiles:[file1.path],
            system: sys,
            options: { allowNonTsExtensions: true },
            cb: cb2,
            watchOptions: undefined
        }));
        watchBaseline({
            baseline,
            getPrograms: getPrograms2,
            oldPrograms: ts.emptyArray,
            sys,
            oldSnap: oldSnap2,
        });

        sys.logTimeoutQueueLength();
        baseline.push(`First program is not updated:: ${getPrograms() === ts.emptyArray}`);
        baseline.push(`Second program is not updated:: ${getPrograms2() === ts.emptyArray}`);
        Harness.Baseline.runBaseline(`tscWatch/${scenario}/two-watch-programs-are-not-affected-by-each-other.js`, baseline.join("\r\n"));
    });

    verifyTscWatch({
        scenario,
        subScenario: "can correctly update configured project when set of root files has changed (new file on disk)",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "let x = 1"
            };
            return createWatchedSystem([file1, libFile, configFile]);
        },
        edits: [
            {
                caption: "Write f2",
                edit: sys => sys.writeFile("/a/b/f2.ts", "let y = 1"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "can correctly update configured project when set of root files has changed (new file in list of files)",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "let x = 1"
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: "let y = 1"
            };
            const configFile = {
                path: configFilePath,
                content: JSON.stringify({ compilerOptions: {}, files: ["f1.ts"] })
            };
            return createWatchedSystem([file1, file2, libFile, configFile]);
        },
        edits: [
            {
                caption: "Modify config to make f2 as root too",
                edit: sys => sys.writeFile(configFilePath, JSON.stringify({ compilerOptions: {}, files: ["f1.ts", "f2.ts"] })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "correctly parses wild card directories from implicit glob when two keys differ only in directory seperator",
        commandLineArgs: ["-w", "--extendedDiagnostics"],
        sys: () => {
            const file1 = {
                path: `/user/username/projects/myproject/f1.ts`,
                content: "export const x = 1"
            };
            const file2 = {
                path: `/user/username/projects/myproject/f2.ts`,
                content: "export const y = 1"
            };
            const configFile = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: { composite: true }, include: ["./", "./**/*.json"] })
            };
            return createWatchedSystem([file1, file2, libFile, configFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Add new file",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/new-file.ts`, "export const z = 1;"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Import new file",
                edit: sys => sys.prependFile(`/user/username/projects/myproject/f1.ts`, `import { z } from "./new-file";`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "can correctly update configured project when set of root files has changed through include",
        commandLineArgs: ["-w", "-p", "."],
        sys: () => {
            const file1 = {
                path: `/user/username/projects/myproject/Project/file1.ts`,
                content: "export const x = 10;"
            };
            const configFile = {
                path: `/user/username/projects/myproject/Project/tsconfig.json`,
                content: JSON.stringify({ include: [".", "./**/*.json"] })
            };
            return createWatchedSystem([file1, libFile, configFile], { currentDirectory: `/user/username/projects/myproject/Project` });
        },
        edits: [
            {
                caption: "Write file2",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/Project/file2.ts`, "export const y = 10;"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "can update configured project when set of root files was not changed",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "let x = 1"
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: "let y = 1"
            };
            const configFile = {
                path: configFilePath,
                content: JSON.stringify({ compilerOptions: {}, files: ["f1.ts", "f2.ts"] })
            };
            return createWatchedSystem([file1, file2, libFile, configFile]);
        },
        edits: [
            {
                caption: "Modify config to set outFile option",
                edit: sys => sys.writeFile(configFilePath, JSON.stringify({ compilerOptions: { outFile: "out.js" }, files: ["f1.ts", "f2.ts"] })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "file in files is deleted",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "let x = 1"
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: "let y = 1"
            };
            const configFile = {
                path: configFilePath,
                content: JSON.stringify({ compilerOptions: {}, files: ["f1.ts", "f2.ts"] })
            };
            return createWatchedSystem([file1, file2, libFile, configFile]);
        },
        edits: [
            {
                caption: "Delete f2",
                edit: sys => sys.deleteFile("/a/b/f2.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "config file is deleted",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/f1.ts",
                content: "let x = 1;"
            };
            const file2 = {
                path: "/a/b/f2.ts",
                content: "let y = 2;"
            };
            return createWatchedSystem([file1, file2, libFile, configFile]);
        },
        edits: [
            {
                caption: "Delete config file",
                edit: sys => sys.deleteFile(configFilePath),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "Proper errors document is not contained in project",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file1 = {
                path: "/a/b/app.ts",
                content: ""
            };
            const corruptedConfig = {
                path: configFilePath,
                content: "{"
            };
            return createWatchedSystem([file1, libFile, corruptedConfig]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "correctly handles changes in lib section of config file",
        commandLineArgs: ["-w", "-p", "/src/tsconfig.json"],
        sys: () => {
            const libES5 = {
                path: "/compiler/lib.es5.d.ts",
                content: `${libFile.content}
declare const eval: any`
            };
            const libES2015Promise = {
                path: "/compiler/lib.es2015.promise.d.ts",
                content: `declare class Promise<T> {}`
            };
            const app = {
                path: "/src/app.ts",
                content: "var x: Promise<string>;"
            };
            const config1 = {
                path: "/src/tsconfig.json",
                content: JSON.stringify(
                    {
                        compilerOptions: {
                            module: "commonjs",
                            target: "es5",
                            noImplicitAny: true,
                            sourceMap: false,
                            lib: [
                                "es5"
                            ]
                        }
                    })
            };
            return createWatchedSystem([libES5, libES2015Promise, app, config1], { executingFilePath: "/compiler/tsc.js" });
        },
        edits: [
            {
                caption: "Change the lib in config",
                edit: sys => sys.writeFile("/src/tsconfig.json", JSON.stringify(
                    {
                        compilerOptions: {
                            module: "commonjs",
                            target: "es5",
                            noImplicitAny: true,
                            sourceMap: false,
                            lib: [
                                "es5",
                                "es2015.promise"
                            ]
                        }
                    })
                ),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "should handle non-existing directories in config file",
        commandLineArgs: ["-w", "-p", "/a/tsconfig.json"],
        sys: () => {
            const f = {
                path: "/a/src/app.ts",
                content: "let x = 1;"
            };
            const config = {
                path: "/a/tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: {},
                    include: [
                        "src/**/*",
                        "notexistingfolder/*"
                    ]
                })
            };
            return createWatchedSystem([f, config, libFile]);
        },
    });

    function runQueuedTimeoutCallbacksTwice(sys: TestServerHost) {
        sys.runQueuedTimeoutCallbacks(); // Scheduled invalidation of resolutions
        sys.runQueuedTimeoutCallbacks(); // Actual update
    }

    const changeModuleFileToModuleFile1: TscWatchCompileChange = {
        caption: "Rename moduleFile to moduleFile1",
        edit: sys => {
            sys.renameFile("/users/username/projects/project/moduleFile.ts", "/users/username/projects/project/moduleFile1.ts");
            sys.deleteFile("/users/username/projects/project/moduleFile.js");
        },
        timeouts: runQueuedTimeoutCallbacksTwice
    };
    const changeModuleFile1ToModuleFile: TscWatchCompileChange = {
        caption: "Rename moduleFile1 back to moduleFile",
        edit: sys => sys.renameFile("/users/username/projects/project/moduleFile1.ts", "/users/username/projects/project/moduleFile.ts"),
        timeouts: runQueuedTimeoutCallbacksTwice,
    };

    verifyTscWatch({
        scenario,
        subScenario: "rename a module file and rename back should restore the states for inferred projects",
        commandLineArgs: ["-w", "/users/username/projects/project/file1.ts"],
        sys: () => {
            const moduleFile = {
                path: "/users/username/projects/project/moduleFile.ts",
                content: "export function bar() { };"
            };
            const file1 = {
                path: "/users/username/projects/project/file1.ts",
                content: 'import * as T from "./moduleFile"; T.bar();'
            };
            return createWatchedSystem([moduleFile, file1, libFile]);
        },
        edits: [
            changeModuleFileToModuleFile1,
            changeModuleFile1ToModuleFile
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "rename a module file and rename back should restore the states for configured projects",
        commandLineArgs: ["-w", "-p", "/users/username/projects/project/tsconfig.json"],
        sys: () => {
            const moduleFile = {
                path: "/users/username/projects/project/moduleFile.ts",
                content: "export function bar() { };"
            };
            const file1 = {
                path: "/users/username/projects/project/file1.ts",
                content: 'import * as T from "./moduleFile"; T.bar();'
            };
            const configFile = {
                path: "/users/username/projects/project/tsconfig.json",
                content: `{}`
            };
            return createWatchedSystem([moduleFile, file1, configFile, libFile]);
        },
        edits: [
            changeModuleFileToModuleFile1,
            changeModuleFile1ToModuleFile
        ]
    });

    describe("types from config file", () => {
        function verifyTypesLoad(includeTypeRoots: boolean) {
            verifyTscWatch({
                scenario,
                subScenario: includeTypeRoots ?
                    "types should not load from config file path if config exists but does not specifies typeRoots" :
                    "types should load from config file path if config exists",
                commandLineArgs: ["-w", "-p", configFilePath],
                sys: () => {
                    const f1 = {
                        path: "/a/b/app.ts",
                        content: "let x = 1"
                    };
                    const config = {
                        path: configFilePath,
                        content: JSON.stringify({ compilerOptions: { types: ["node"], typeRoots: includeTypeRoots ? [] : undefined } })
                    };
                    const node = {
                        path: "/a/b/node_modules/@types/node/index.d.ts",
                        content: "declare var process: any"
                    };
                    const cwd = {
                        path: "/a/c"
                    };
                    return createWatchedSystem([f1, config, node, cwd, libFile], { currentDirectory: cwd.path });
                },
            });
        }
        verifyTypesLoad(/*includeTypeRoots*/ false);
        verifyTypesLoad(/*includeTypeRoots*/ true);
    });

    verifyTscWatch({
        scenario,
        subScenario: "add the missing module file for inferred project-should remove the module not found error",
        commandLineArgs: ["-w", "/users/username/projects/project/file1.ts"],
        sys: () => {
            const file1 = {
                path: "/users/username/projects/project/file1.ts",
                content: 'import * as T from "./moduleFile"; T.bar();'
            };
            return createWatchedSystem([file1, libFile]);
        },
        edits: [
            {
                caption: "Create module file",
                edit: sys => sys.writeFile("/users/username/projects/project/moduleFile.ts", "export function bar() { }"),
                timeouts: runQueuedTimeoutCallbacksTwice,
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "Configure file diagnostics events are generated when the config file has errors",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file = {
                path: "/a/b/app.ts",
                content: "let x = 10"
            };
            const configFile = {
                path: configFilePath,
                content: `{
                        "compilerOptions": {
                            "foo": "bar",
                            "allowJS": true
                        }
                    }`
            };
            return createWatchedSystem([file, configFile, libFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "if config file doesnt have errors, they are not reported",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file = {
                path: "/a/b/app.ts",
                content: "let x = 10"
            };
            const configFile = {
                path: configFilePath,
                content: `{
                        "compilerOptions": {}
                    }`
            };
            return createWatchedSystem([file, configFile, libFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "Reports errors when the config file changes",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file = {
                path: "/a/b/app.ts",
                content: "let x = 10"
            };
            return createWatchedSystem([file, configFile, libFile]);
        },
        edits: [
            {
                caption: "change config file to add error",
                edit: sys => sys.writeFile(configFilePath, `{
                        "compilerOptions": {
                            "haha": 123
                        }
                    }`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "change config file to remove error",
                edit: sys => sys.writeFile(configFilePath, `{
                        "compilerOptions": {
                        }
                    }`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "non-existing directories listed in config file input array should be tolerated without crashing the server",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const configFile = {
                path: configFilePath,
                content: `{
                        "compilerOptions": {},
                        "include": ["app/*", "test/**/*", "something"]
                    }`
            };
            const file1 = {
                path: "/a/b/file1.ts",
                content: "let t = 10;"
            };
            return createWatchedSystem([file1, configFile, libFile]);
        },
    });

    verifyTscWatch({
        scenario,
        subScenario: "non-existing directories listed in config file input array should be able to handle @types if input file list is empty",
        commandLineArgs: ["-w", "-p", "/a/tsconfig.json"],
        sys: () => {
            const f = {
                path: "/a/app.ts",
                content: "let x = 1"
            };
            const config = {
                path: "/a/tsconfig.json",
                content: JSON.stringify({
                    compiler: {},
                    files: []
                })
            };
            const t1 = {
                path: "/a/node_modules/@types/typings/index.d.ts",
                content: `export * from "./lib"`
            };
            const t2 = {
                path: "/a/node_modules/@types/typings/lib.d.ts",
                content: `export const x: number`
            };
            return createWatchedSystem([f, config, t1, t2, libFile], { currentDirectory: ts.getDirectoryPath(f.path) });
        },
    });

    it("should support files without extensions", () => {
        const f = {
            path: "/a/compile",
            content: "let x = 1"
        };
        const { sys, baseline, oldSnap, cb, getPrograms } = createBaseline(createWatchedSystem([f, libFile]));
        const watch = ts.createWatchProgram(createWatchCompilerHostOfFilesAndCompilerOptionsForBaseline({
            rootFiles: [f.path],
            system: sys,
            options: { allowNonTsExtensions: true },
            cb,
            watchOptions: undefined
        }));
        runWatchBaseline({
            scenario,
            subScenario: "should support files without extensions",
            commandLineArgs: ["--w", f.path],
            sys,
            baseline,
            oldSnap,
            getPrograms,
            watchOrSolution: watch
        });
    });

    verifyTscWatch({
        scenario,
        subScenario: "Options Diagnostic locations reported correctly with changes in configFile contents when options change",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const file = {
                path: "/a/b/app.ts",
                content: "let x = 10"
            };
            const configFile = {
                path: configFilePath,
                content: `
{
    // comment
    // More comment
    "compilerOptions": {
        "inlineSourceMap": true,
        "mapRoot": "./"
    }
}`
            };
            return createWatchedSystem([file, libFile, configFile]);
        },
        edits: [
            {
                caption: "Remove the comment from config file",
                edit: sys => sys.writeFile(configFilePath, `
{
    "compilerOptions": {
        "inlineSourceMap": true,
        "mapRoot": "./"
    }
}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    describe("should not trigger recompilation because of program emit", () => {
        function verifyWithOptions(subScenario: string, options: ts.CompilerOptions) {
            verifyTscWatch({
                scenario,
                subScenario: `should not trigger recompilation because of program emit/${subScenario}`,
                commandLineArgs: ["-w", "-p", `/user/username/projects/myproject/tsconfig.json`],
                sys: () => {
                    const file1: File = {
                        path: `/user/username/projects/myproject/file1.ts`,
                        content: "export const c = 30;"
                    };
                    const file2: File = {
                        path: `/user/username/projects/myproject/src/file2.ts`,
                        content: `import {c} from "file1"; export const d = 30;`
                    };
                    const tsconfig: File = {
                        path: `/user/username/projects/myproject/tsconfig.json`,
                        content: JSON.stringify({
                            compilerOptions: compilerOptionsToConfigJson(options)
                        })
                    };
                    return createWatchedSystem([file1, file2, libFile, tsconfig], { currentDirectory: "/user/username/projects/myproject" });
                },
                edits: [
                    noopChange,
                    {
                        caption: "Add new file",
                        edit: sys => sys.writeFile(`/user/username/projects/myproject/src/file3.ts`, `export const y = 10;`),
                        timeouts: sys => sys.runQueuedTimeoutCallbacks(), // To update program and failed lookups
                    },
                    noopChange,
                ]
            });
        }

        verifyWithOptions(
            "without outDir or outFile is specified",
            { module: ts.ModuleKind.AMD }
        );

        verifyWithOptions(
            "with outFile",
            { module: ts.ModuleKind.AMD, outFile: "build/outFile.js" }
        );

        verifyWithOptions(
            "when outDir is specified",
            { module: ts.ModuleKind.AMD, outDir: "build" }
        );

        verifyWithOptions(
            "without outDir or outFile is specified with declaration enabled",
            { module: ts.ModuleKind.AMD, declaration: true }
        );

        verifyWithOptions(
            "when outDir and declarationDir is specified",
            { module: ts.ModuleKind.AMD, outDir: "build", declaration: true, declarationDir: "decls" }
        );

        verifyWithOptions(
            "declarationDir is specified",
            { module: ts.ModuleKind.AMD, declaration: true, declarationDir: "decls" }
        );
    });

    verifyTscWatch({
        scenario,
        subScenario: "shouldnt report error about unused function incorrectly when file changes from global to module",
        commandLineArgs: ["-w", "/a/b/file.ts", "--noUnusedLocals"],
        sys: () => {
            const file: File = {
                path: "/a/b/file.ts",
                content: `function one() {}
function two() {
    return function three() {
        one();
    }
}`
            };
            return createWatchedSystem([file, libFile]);
        },
        edits: [
            {
                caption: "Change file to module",
                edit: sys => sys.writeFile("/a/b/file.ts", `function one() {}
export function two() {
    return function three() {
        one();
    }
}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),

            }
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "watched files when file is deleted and new file is added as part of change",
        commandLineArgs: ["-w", "-p", "/home/username/project/tsconfig.json"],
        sys: () => {
            const projectLocation = "/home/username/project";
            const file: File = {
                path: `${projectLocation}/src/file1.ts`,
                content: "var a = 10;"
            };
            const configFile: File = {
                path: `${projectLocation}/tsconfig.json`,
                content: "{}"
            };
            return createWatchedSystem([file, libFile, configFile]);
        },
        edits: [
            {
                caption: "Rename file1 to file2",
                edit: sys => sys.renameFile("/home/username/project/src/file1.ts", "/home/username/project/src/file2.ts"),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            }
        ]
    });

    function changeParameterTypeOfBFile(parameterName: string, toType: string): TscWatchCompileChange {
        return {
            caption: `Changed ${parameterName} type to ${toType}`,
            edit: sys => sys.replaceFileText(`/user/username/projects/myproject/b.ts`, new RegExp(`${parameterName}\: [a-z]*`), `${parameterName}: ${toType}`),
            timeouts: sys => sys.runQueuedTimeoutCallbacks(),
        };
    }

    verifyTscWatch({
        scenario,
        subScenario: "updates errors correctly when declaration emit is disabled in compiler options",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `import test from './b';
test(4, 5);`
            };
            const bFile: File = {
                path: `/user/username/projects/myproject/b.ts`,
                content: `function test(x: number, y: number) {
    return x + y / 5;
}
export default test;`
            };
            const tsconfigFile: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        module: "commonjs",
                        noEmit: true,
                        strict: true,
                    }
                })
            };
            return createWatchedSystem([aFile, bFile, libFile, tsconfigFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            changeParameterTypeOfBFile("x", "string"),
            changeParameterTypeOfBFile("x", "number"),
            changeParameterTypeOfBFile("y", "string"),
            changeParameterTypeOfBFile("y", "number"),
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates errors when strictNullChecks changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `declare function foo(): null | { hello: any };
foo().hello`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: {} })
            };
            return createWatchedSystem([aFile, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Enable strict null checks",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { strictNullChecks: true } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Set always strict false",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { strict: true, alwaysStrict: false } })), // Avoid changing 'alwaysStrict' or must re-bind
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Disable strict",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: {} })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates errors when noErrorTruncation changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `declare var v: {
    reallyLongPropertyName1: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName2: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName3: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName4: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName5: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName6: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName7: string | number | boolean | object | symbol | bigint;
};
v === 'foo';`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: {} })
            };
            return createWatchedSystem([aFile, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Enable noErrorTruncation",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { noErrorTruncation: true } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates diagnostics and emit when useDefineForClassFields changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/a.ts`,
                content: `class C { get prop() { return 1; } }
class D extends C { prop = 1; }`
            };
            const config: File = {
                path: `/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: { target: "es6" } })
            };
            return createWatchedSystem([aFile, config, libFile]);
        },
        edits: [
            {
                caption: "Enable useDefineForClassFields",
                edit: sys => sys.writeFile(`/tsconfig.json`, JSON.stringify({ compilerOptions: { target: "es6", useDefineForClassFields: true } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates errors and emit when importsNotUsedAsValues changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `export class C {}`
            };
            const bFile: File = {
                path: `/user/username/projects/myproject/b.ts`,
                content: `import {C} from './a';
export function f(p: C) { return p; }`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: {} })
            };
            return createWatchedSystem([aFile, bFile, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: 'Set to "remove"',
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { importsNotUsedAsValues: "remove" } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: 'Set to "error"',
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { importsNotUsedAsValues: "error" } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: 'Set to "preserve"',
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { importsNotUsedAsValues: "preserve" } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });


    verifyTscWatch({
        scenario,
        subScenario: "updates errors when forceConsistentCasingInFileNames changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/a.ts`,
                content: `export class C {}`
            };
            const bFile: File = {
                path: `/b.ts`,
                content: `import {C} from './a'; import * as A from './A';`
            };
            const config: File = {
                path: `/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: { forceConsistentCasingInFileNames: false } })
            };
            return createWatchedSystem([aFile, bFile, config, libFile], { useCaseSensitiveFileNames: false });
        },
        edits: [
            {
                caption: "Enable forceConsistentCasingInFileNames",
                edit: sys => sys.writeFile(`/tsconfig.json`, JSON.stringify({ compilerOptions: { forceConsistentCasingInFileNames: true } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates moduleResolution when resolveJsonModule changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `import * as data from './data.json'`
            };
            const jsonFile: File = {
                path: `/user/username/projects/myproject/data.json`,
                content: `{ "foo": 1 }`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({ compilerOptions: { moduleResolution: "node" } })
            };
            return createWatchedSystem([aFile, jsonFile, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Enable resolveJsonModule",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({ compilerOptions: { moduleResolution: "node", resolveJsonModule: true } })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates errors when ambient modules of program changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `declare module 'a' {
  type foo = number;
}`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: "{}"
            };
            return createWatchedSystem([aFile, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Create b.ts with same content",
                // Create bts with same file contents
                edit: sys => sys.writeFile(`/user/username/projects/myproject/b.ts`, `declare module 'a' {
  type foo = number;
}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Delete b.ts",
                edit: sys => sys.deleteFile(`/user/username/projects/myproject/b.ts`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    describe("updates errors in lib file", () => {
        const field = "fullscreen";
        const fieldWithoutReadonly = `interface Document {
    ${field}: boolean;
}`;

        const libFileWithDocument: File = {
            path: libFile.path,
            content: `${libFile.content}
interface Document {
    readonly ${field}: boolean;
}`
        };

        function verifyLibFileErrorsWith(subScenario: string, aFile: File) {
            function verifyLibErrors(subScenario: string, commandLineOptions: readonly string[]) {
                verifyTscWatch({
                    scenario,
                    subScenario: `updates errors in lib file/${subScenario}`,
                    commandLineArgs: ["-w", aFile.path, ...commandLineOptions],
                    sys: () => createWatchedSystem([aFile, libFileWithDocument], { currentDirectory: "/user/username/projects/myproject" }),
                    edits: [
                        {
                            caption: "Remove document declaration from file",
                            edit: sys => sys.writeFile(aFile.path, aFile.content.replace(fieldWithoutReadonly, "var x: string;")),
                            timeouts: sys => sys.runQueuedTimeoutCallbacks(),
                        },
                        {
                            caption: "Rever the file to contain document declaration",
                            edit: sys => sys.writeFile(aFile.path, aFile.content),
                            timeouts: sys => sys.runQueuedTimeoutCallbacks(),
                        },
                    ]
                });
            }

            verifyLibErrors(`${subScenario}/with default options`, ts.emptyArray);
            verifyLibErrors(`${subScenario}/with skipLibCheck`, ["--skipLibCheck"]);
            verifyLibErrors(`${subScenario}/with skipDefaultLibCheck`, ["--skipDefaultLibCheck"]);
        }

        describe("when non module file changes", () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `${fieldWithoutReadonly}
var y: number;`
            };
            verifyLibFileErrorsWith("when non module file changes", aFile);
        });

        describe("when module file with global definitions changes", () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `export {}
declare global {
${fieldWithoutReadonly}
var y: number;
}`
            };
            verifyLibFileErrorsWith("when module file with global definitions changes", aFile);
        });
    });

    function changeWhenLibCheckChanges(compilerOptions: ts.CompilerOptions): TscWatchCompileChange {
        const configFileContent = JSON.stringify({ compilerOptions });
        return {
            caption: `Changing config to ${configFileContent}`,
            edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, configFileContent),
            timeouts: sys => sys.runQueuedTimeoutCallbacks(),
        };
    }

    verifyTscWatch({
        scenario,
        subScenario: "when skipLibCheck and skipDefaultLibCheck changes",
        commandLineArgs: ["-w"],
        sys: () => {
            const field = "fullscreen";
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `interface Document {
    ${field}: boolean;
}`
            };
            const bFile: File = {
                path: `/user/username/projects/myproject/b.d.ts`,
                content: `interface Document {
    ${field}: boolean;
}`
            };
            const libFileWithDocument: File = {
                path: libFile.path,
                content: `${libFile.content}
interface Document {
    readonly ${field}: boolean;
}`
            };
            const configFile: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: "{}"
            };
            return createWatchedSystem([aFile, bFile, configFile, libFileWithDocument], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            changeWhenLibCheckChanges({ skipLibCheck: true }),
            changeWhenLibCheckChanges({ skipDefaultLibCheck: true }),
            changeWhenLibCheckChanges({}),
            changeWhenLibCheckChanges({ skipDefaultLibCheck: true }),
            changeWhenLibCheckChanges({ skipLibCheck: true }),
            changeWhenLibCheckChanges({}),
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "reports errors correctly with isolatedModules",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `export const a: string = "";`
            };
            const bFile: File = {
                path: `/user/username/projects/myproject/b.ts`,
                content: `import { a } from "./a";
const b: string = a;`
            };
            const configFile: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        isolatedModules: true
                    }
                })
            };
            return createWatchedSystem([aFile, bFile, configFile, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Change shape of a",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/a.ts`, `export const a: number = 1`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "reports errors correctly with file not in rootDir",
        commandLineArgs: ["-w"],
        sys: () => {
            const aFile: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: `import { x } from "../b";`
            };
            const bFile: File = {
                path: `/user/username/projects/b.ts`,
                content: `export const x = 10;`
            };
            const configFile: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        rootDir: ".",
                        outDir: "lib"
                    }
                })
            };
            return createWatchedSystem([aFile, bFile, configFile, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Make changes to file a",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/a.ts`, `

import { x } from "../b";`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "updates emit on jsx option change",
        commandLineArgs: ["-w"],
        sys: () => {
            const index: File = {
                path: `/user/username/projects/myproject/index.tsx`,
                content: `declare var React: any;\nconst d = <div />;`
            };
            const configFile: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        jsx: "preserve"
                    }
                })
            };
            return createWatchedSystem([index, configFile, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Update 'jsx' to 'react'",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, '{ "compilerOptions": { "jsx": "react" } }'),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "extended source files are watched",
        commandLineArgs: ["-w", "-p", configFilePath],
        sys: () => {
            const firstExtendedConfigFile: File = {
                path: "/a/b/first.tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: {
                        strict: true
                    }
                })
            };
            const secondExtendedConfigFile: File = {
                path: "/a/b/second.tsconfig.json",
                content: JSON.stringify({
                    extends: "./first.tsconfig.json"
                })
            };
            const configFile: File = {
                path: configFilePath,
                content: JSON.stringify({
                    compilerOptions: {},
                    files: [commonFile1.path, commonFile2.path]
                })
            };
            return createWatchedSystem([
                libFile, commonFile1, commonFile2, configFile, firstExtendedConfigFile, secondExtendedConfigFile
            ]);
        },
        edits: [
            {
                caption: "Change config to extend another config",
                edit: sys => sys.modifyFile(configFilePath, JSON.stringify({
                    extends: "./second.tsconfig.json",
                    compilerOptions: {},
                    files: [commonFile1.path, commonFile2.path]
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Change first extended config",
                edit: sys => sys.modifyFile("/a/b/first.tsconfig.json", JSON.stringify({
                    compilerOptions: {
                        strict: false,
                    }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Change second extended config",
                edit: sys => sys.modifyFile("/a/b/second.tsconfig.json", JSON.stringify({
                    extends: "./first.tsconfig.json",
                    compilerOptions: {
                        strictNullChecks: true,
                    }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Change config to stop extending another config",
                edit: sys => sys.modifyFile(configFilePath, JSON.stringify({
                    compilerOptions: {},
                    files: [commonFile1.path, commonFile2.path]
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "when creating new file in symlinked folder",
        commandLineArgs: ["-w", "-p", ".", "--extendedDiagnostics"],
        sys: () => {
            const module1: File = {
                path: `/user/username/projects/myproject/client/folder1/module1.ts`,
                content: `export class Module1Class { }`
            };
            const module2: File = {
                path: `/user/username/projects/myproject/folder2/module2.ts`,
                content: `import * as M from "folder1/module1";`
            };
            const symlink: SymLink = {
                path: `/user/username/projects/myproject/client/linktofolder2`,
                symLink: `/user/username/projects/myproject/folder2`,
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        baseUrl: "client",
                        paths: { "*": ["*"] },
                    },
                    include: ["client/**/*", "folder2"]
                })
            };
            return createWatchedSystem([module1, module2, symlink, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Add module3 to folder2",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/client/linktofolder2/module3.ts`, `import * as M from "folder1/module1";`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "when new file is added to the referenced project",
        commandLineArgs: ["-w", "-p", `/user/username/projects/myproject/projects/project2/tsconfig.json`, "--extendedDiagnostics"],
        sys: () => {
            const config1: File = {
                path: `/user/username/projects/myproject/projects/project1/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        module: "none",
                        composite: true
                    },
                    exclude: ["temp"]
                })
            };
            const class1: File = {
                path: `/user/username/projects/myproject/projects/project1/class1.ts`,
                content: `class class1 {}`
            };
            // Built file
            const class1Dt: File = {
                path: `/user/username/projects/myproject/projects/project1/class1.d.ts`,
                content: `declare class class1 {}`
            };
            const config2: File = {
                path: `/user/username/projects/myproject/projects/project2/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        module: "none",
                        composite: true
                    },
                    references: [
                        { path: "../project1" }
                    ]
                })
            };
            const class2: File = {
                path: `/user/username/projects/myproject/projects/project2/class2.ts`,
                content: `class class2 {}`
            };
            return createWatchedSystem([config1, class1, config2, class2, libFile, class1Dt]);
        },
        edits: [
            {
                caption: "Add class3 to project1",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/projects/project1/class3.ts`, `class class3 {}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Add output of class3",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/projects/project1/class3.d.ts`, `declare class class3 {}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Add excluded file to project1",
                edit: sys => sys.ensureFileOrFolder({ path: `/user/username/projects/myproject/projects/project1/temp/file.d.ts`, content: `declare class file {}` }),
                timeouts: sys => sys.logTimeoutQueueLength(),
            },
            {
                caption: "Delete output of class3",
                edit: sys => sys.deleteFile(`/user/username/projects/myproject/projects/project1/class3.d.ts`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "Add output of class3",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/projects/project1/class3.d.ts`, `declare class class3 {}`),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "when creating extensionless file",
        commandLineArgs: ["-w", "-p", ".", "--extendedDiagnostics"],
        sys: () => {
            const module1: File = {
                path: `/user/username/projects/myproject/index.ts`,
                content: ``
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: `{}`
            };
            return createWatchedSystem([module1, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Create foo in project root",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/foo`, ``),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });

    verifyTscWatch({
        scenario,
        subScenario: "when changing `allowImportingTsExtensions` of config file",
        commandLineArgs: ["-w", "-p", ".", "--extendedDiagnostics"],
        sys: () => {
            const module1: File = {
                path: `/user/username/projects/myproject/a.ts`,
                content: ``
            };
            const module2: File = {
                path: `/user/username/projects/myproject/b.ts`,
                content: `import "./a.ts";`
            };
            const config: File = {
                path: `/user/username/projects/myproject/tsconfig.json`,
                content: JSON.stringify({
                    compilerOptions: {
                        noEmit: true,
                        allowImportingTsExtensions: false
                    }
                }),
            };
            return createWatchedSystem([module1, module2, config, libFile], { currentDirectory: "/user/username/projects/myproject" });
        },
        edits: [
            {
                caption: "Change allowImportingTsExtensions to true",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/tsconfig.json`, JSON.stringify({
                    compilerOptions: {
                        noEmit: true,
                        allowImportingTsExtensions: true
                    }
                })),
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ]
    });
});
