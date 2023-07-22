import * as ts from "../../_namespaces/ts";
import {
    baselineTsserverLogs,
    closeFilesForSession,
    createLoggerWithInMemoryLogs,
    createSession,
    openFilesForSession,
    protocolFileLocationFromSubstring,
    TestSession,
} from "../helpers/tsserver";
import {
    createServerHost,
    File,
} from "../helpers/virtualFileSystemWithWatch";

function checkDeclarationFiles(file: File, session: TestSession): void {
    openFilesForSession([file], session);
    const project = ts.Debug.checkDefined(session.getProjectService().getDefaultProjectForFile(file.path as ts.server.NormalizedPath, /*ensureProject*/ false));
    const program = project.getCurrentProgram()!;
    const output = ts.getFileEmitOutput(program, ts.Debug.checkDefined(program.getSourceFile(file.path)), /*emitOnlyDtsFiles*/ true);
    session.logger.log(`ts.getFileEmitOutput: ${file.path}: ${JSON.stringify(output, undefined, " ")}`);
    closeFilesForSession([file], session);
}

describe("unittests:: tsserver:: with declaration file maps:: project references", () => {
    const aTs: File = {
        path: "/a/a.ts",
        content: "export function fnA() {}\nexport interface IfaceA {}\nexport const instanceA: IfaceA = {};",
    };
    const compilerOptions: ts.CompilerOptions = {
        outDir: "bin",
        declaration: true,
        declarationMap: true,
        composite: true,
    };
    const configContent = JSON.stringify({ compilerOptions });
    const aTsconfig: File = { path: "/a/tsconfig.json", content: configContent };

    const aDtsMapContent: ts.RawSourceMap = {
        version: 3,
        file: "a.d.ts",
        sourceRoot: "",
        sources: ["../a.ts"],
        names: [],
        mappings: "AAAA,wBAAgB,GAAG,SAAK;AACxB,MAAM,WAAW,MAAM;CAAG;AAC1B,eAAO,MAAM,SAAS,EAAE,MAAW,CAAC"
    };
    const aDtsMap: File = {
        path: "/a/bin/a.d.ts.map",
        content: JSON.stringify(aDtsMapContent),
    };
    const aDts: File = {
        path: "/a/bin/a.d.ts",
        // ${""} is needed to mangle the sourceMappingURL part or it breaks the build
        content: `export declare function fnA(): void;\nexport interface IfaceA {\n}\nexport declare const instanceA: IfaceA;\n//# source${""}MappingURL=a.d.ts.map`,
    };

    const bTs: File = {
        path: "/b/b.ts",
        content: "export function fnB() {}",
    };
    const bTsconfig: File = { path: "/b/tsconfig.json", content: configContent };

    const bDtsMapContent: ts.RawSourceMap = {
        version: 3,
        file: "b.d.ts",
        sourceRoot: "",
        sources: ["../b.ts"],
        names: [],
        mappings: "AAAA,wBAAgB,GAAG,SAAK",
    };
    const bDtsMap: File = {
        path: "/b/bin/b.d.ts.map",
        content: JSON.stringify(bDtsMapContent),
    };
    const bDts: File = {
        // ${""} is need to mangle the sourceMappingURL part so it doesn't break the build
        path: "/b/bin/b.d.ts",
        content: `export declare function fnB(): void;\n//# source${""}MappingURL=b.d.ts.map`,
    };

    const dummyFile: File = {
        path: "/dummy/dummy.ts",
        content: "let a = 10;"
    };

    const userTs: File = {
        path: "/user/user.ts",
        content: 'import * as a from "../a/bin/a";\nimport * as b from "../b/bin/b";\nexport function fnUser() { a.fnA(); b.fnB(); a.instanceA; }',
    };

    const userTsForConfigProject: File = {
        path: "/user/user.ts",
        content: 'import * as a from "../a/a";\nimport * as b from "../b/b";\nexport function fnUser() { a.fnA(); b.fnB(); a.instanceA; }',
    };

    const userTsconfig: File = {
        path: "/user/tsconfig.json",
        content: JSON.stringify({
            file: ["user.ts"],
            references: [{ path: "../a" }, { path: "../b" }]
        })
    };

    function makeSampleProjects(addUserTsConfig?: boolean, keepAllFiles?: boolean) {
        const host = createServerHost([aTs, aTsconfig, aDtsMap, aDts, bTsconfig, bTs, bDtsMap, bDts, ...(addUserTsConfig ? [userTsForConfigProject, userTsconfig] : [userTs]), dummyFile]);
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });

        checkDeclarationFiles(aTs, session);
        checkDeclarationFiles(bTs, session);

        // Testing what happens if we delete the original sources.
        if (!keepAllFiles) {
            host.deleteFile(bTs.path);
        }

        openFilesForSession([userTs], session);
        return session;
    }

    function verifySingleInferredProject(session: TestSession) {
        // Close user file should close all the projects after opening dummy file
        closeFilesForSession([userTs], session);
        openFilesForSession([dummyFile], session);
    }

    function verifyATsConfigOriginalProject(session: TestSession) {
        // Close user file should close all the projects
        closeFilesForSession([userTs], session);
        openFilesForSession([dummyFile], session);
    }

    function verifyATsConfigWhenOpened(session: TestSession) {
        closeFilesForSession([userTs], session);
        openFilesForSession([dummyFile], session);
    }

    it("goToDefinition", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.DefinitionRequest>({
            command: ts.server.protocol.CommandTypes.Definition,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "goToDefinition", session);
    });

    it("getDefinitionAndBoundSpan", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.DefinitionAndBoundSpanRequest>({
            command: ts.server.protocol.CommandTypes.DefinitionAndBoundSpan,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "getDefinitionAndBoundSpan", session);
    });

    it("getDefinitionAndBoundSpan with file navigation", () => {
        const session = makeSampleProjects(/*addUserTsConfig*/ true);
        session.executeCommandSeq<ts.server.protocol.DefinitionAndBoundSpanRequest>({
            command: ts.server.protocol.CommandTypes.DefinitionAndBoundSpan,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });

        // Navigate to the definition
        closeFilesForSession([userTs], session);
        openFilesForSession([aTs], session);

        // UserTs configured project should be alive
        closeFilesForSession([aTs], session);
        openFilesForSession([dummyFile], session);
        baselineTsserverLogs("declarationFileMaps", "getDefinitionAndBoundSpan with file navigation", session);
    });

    it("goToType", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.TypeDefinitionRequest>({
            command: ts.server.protocol.CommandTypes.TypeDefinition,
            arguments: protocolFileLocationFromSubstring(userTs, "instanceA")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "goToType", session);
    });

    it("goToImplementation", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.ImplementationRequest>({
            command: ts.server.protocol.CommandTypes.Implementation,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "goToImplementation", session);
    });

    it("goToDefinition -- target does not exist", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.DefinitionRequest>({
            command: ts.server.protocol.CommandTypes.Definition,
            arguments: protocolFileLocationFromSubstring(userTs, "fnB()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "goToDefinition target does not exist", session);
    });

    it("navigateTo", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.NavtoRequest>({
            command: ts.server.protocol.CommandTypes.Navto,
            arguments: { file: userTs.path, searchValue: "fn" }
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "navigateTo", session);
    });

    it("navigateToAll -- when neither file nor project is specified", () => {
        const session = makeSampleProjects(/*addUserTsConfig*/ true, /*keepAllFiles*/ true);
        session.executeCommandSeq<ts.server.protocol.NavtoRequest>({
            command: ts.server.protocol.CommandTypes.Navto,
            arguments: { file: undefined, searchValue: "fn" }
        });
        baselineTsserverLogs("declarationFileMaps", "navigateToAll neither file not project is specified", session);
    });

    it("navigateToAll -- when file is not specified but project is", () => {
        const session = makeSampleProjects(/*addUserTsConfig*/ true, /*keepAllFiles*/ true);
        session.executeCommandSeq<ts.server.protocol.NavtoRequest>({
            command: ts.server.protocol.CommandTypes.Navto,
            arguments: { projectFileName: bTsconfig.path, file: undefined, searchValue: "fn" }
        });
        baselineTsserverLogs("declarationFileMaps", "navigateToAll file is not specified but project is", session);
    });

    it("findAllReferences", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.ReferencesRequest>({
            command: ts.server.protocol.CommandTypes.References,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });

        verifyATsConfigOriginalProject(session);
        baselineTsserverLogs("declarationFileMaps", "findAllReferences", session);
    });

    it("findAllReferences -- starting at definition", () => {
        const session = makeSampleProjects();
        openFilesForSession([aTs], session); // If it's not opened, the reference isn't found.
        session.executeCommandSeq<ts.server.protocol.ReferencesRequest>({
            command: ts.server.protocol.CommandTypes.References,
            arguments: protocolFileLocationFromSubstring(aTs, "fnA")
        });
        verifyATsConfigWhenOpened(session);
        baselineTsserverLogs("declarationFileMaps", "findAllReferences starting at definition", session);
    });

    interface ReferencesFullRequest extends ts.server.protocol.FileLocationRequest { readonly command: ts.server.protocol.CommandTypes.ReferencesFull; }
    it("findAllReferencesFull", () => {
        const session = makeSampleProjects();

        session.executeCommandSeq<ReferencesFullRequest>({
            command: ts.server.protocol.CommandTypes.ReferencesFull,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifyATsConfigOriginalProject(session);
        baselineTsserverLogs("declarationFileMaps", "findAllReferencesFull", session);
    });

    it("findAllReferencesFull definition is in mapped file", () => {
        const aTs: File = { path: "/a/a.ts", content: `function f() {}` };
        const aTsconfig: File = {
            path: "/a/tsconfig.json",
            content: JSON.stringify({ compilerOptions: { declaration: true, declarationMap: true, outFile: "../bin/a.js" } }),
        };
        const bTs: File = { path: "/b/b.ts", content: `f();` };
        const bTsconfig: File = { path: "/b/tsconfig.json", content: JSON.stringify({ references: [{ path: "../a" }] }) };
        const aDts: File = { path: "/bin/a.d.ts", content: `declare function f(): void;\n//# sourceMappingURL=a.d.ts.map` };
        const aDtsMap: File = {
            path: "/bin/a.d.ts.map",
            content: JSON.stringify({ version: 3, file: "a.d.ts", sourceRoot: "", sources: ["../a/a.ts"], names: [], mappings: "AAAA,iBAAS,CAAC,SAAK" }),
        };

        const host = createServerHost([aTs, aTsconfig, bTs, bTsconfig, aDts, aDtsMap]);
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
        checkDeclarationFiles(aTs, session);
        openFilesForSession([bTs], session);

        session.executeCommandSeq<ReferencesFullRequest>({
            command: ts.server.protocol.CommandTypes.ReferencesFull,
            arguments: protocolFileLocationFromSubstring(bTs, "f()")
        });
        baselineTsserverLogs("declarationFileMaps", "findAllReferencesFull definition is in mapped file", session);
    });

    it("findAllReferences -- target does not exist", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.ReferencesRequest>({
            command: ts.server.protocol.CommandTypes.References,
            arguments: protocolFileLocationFromSubstring(userTs, "fnB()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "findAllReferences target does not exist", session);
    });

    it("renameLocations", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.RenameRequest>({
            command: ts.server.protocol.CommandTypes.Rename,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifyATsConfigOriginalProject(session);
        baselineTsserverLogs("declarationFileMaps", "renameLocations", session);
    });

    it("renameLocations -- starting at definition", () => {
        const session = makeSampleProjects();
        openFilesForSession([aTs], session); // If it's not opened, the reference isn't found.
        session.executeCommandSeq<ts.server.protocol.RenameRequest>({
            command: ts.server.protocol.CommandTypes.Rename,
            arguments: protocolFileLocationFromSubstring(aTs, "fnA")
        });
        verifyATsConfigWhenOpened(session);
        baselineTsserverLogs("declarationFileMaps", "renameLocations starting at definition", session);
    });

    it("renameLocationsFull", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.RenameFullRequest>({
            command: ts.server.protocol.CommandTypes.RenameLocationsFull,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });
        verifyATsConfigOriginalProject(session);
        baselineTsserverLogs("declarationFileMaps", "renameLocationsFull", session);
    });

    it("renameLocations -- target does not exist", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.RenameRequest>({
            command: ts.server.protocol.CommandTypes.Rename,
            arguments: protocolFileLocationFromSubstring(userTs, "fnB()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "renameLocations target does not exist", session);
    });

    it("getEditsForFileRename", () => {
        const session = makeSampleProjects();
        session.executeCommandSeq<ts.server.protocol.GetEditsForFileRenameRequest>({
            command: ts.server.protocol.CommandTypes.GetEditsForFileRename,
            arguments: {
                oldFilePath: aTs.path,
                newFilePath: "/a/aNew.ts",
            }
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "getEditsForFileRename", session);
    });

    it("getEditsForFileRename when referencing project doesnt include file and its renamed", () => {
        const aTs: File = { path: "/a/src/a.ts", content: "" };
        const aTsconfig: File = {
            path: "/a/tsconfig.json",
            content: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    declaration: true,
                    declarationMap: true,
                    outDir: "./build",
                }
            }),
        };
        const bTs: File = { path: "/b/src/b.ts", content: "" };
        const bTsconfig: File = {
            path: "/b/tsconfig.json",
            content: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    outDir: "./build",
                },
                include: ["./src"],
                references: [{ path: "../a" }],
            }),
        };

        const host = createServerHost([aTs, aTsconfig, bTs, bTsconfig]);
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
        openFilesForSession([aTs, bTs], session);
        session.executeCommandSeq<ts.server.protocol.GetEditsForFileRenameRequest>({
            command: ts.server.protocol.CommandTypes.GetEditsForFileRename,
            arguments: {
                oldFilePath: aTs.path,
                newFilePath: "/a/src/a1.ts",
            }
        });
        baselineTsserverLogs("declarationFileMaps", "getEditsForFileRename when referencing project doesnt include file and its renamed", session);
    });

    it("does not jump to source if inlined sources", () => {
        const aDtsInlinedSources: ts.RawSourceMap = {
            ...aDtsMapContent,
            sourcesContent: [aTs.content]
        };
        const aDtsMapInlinedSources: File = {
            path: aDtsMap.path,
            content: JSON.stringify(aDtsInlinedSources)
        };
        const host = createServerHost([aTs, aDtsMapInlinedSources, aDts, bTs, bDtsMap, bDts, userTs, dummyFile]);
        const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });

        openFilesForSession([userTs], session);
        // If config file then userConfig project and bConfig project since it is referenced

        // Inlined so does not jump to aTs
        session.executeCommandSeq<ts.server.protocol.DefinitionAndBoundSpanRequest>({
            command: ts.server.protocol.CommandTypes.DefinitionAndBoundSpan,
            arguments: protocolFileLocationFromSubstring(userTs, "fnA()")
        });

        // Not inlined, jumps to bTs
        session.executeCommandSeq<ts.server.protocol.DefinitionAndBoundSpanRequest>({
            command: ts.server.protocol.CommandTypes.DefinitionAndBoundSpan,
            arguments: protocolFileLocationFromSubstring(userTs, "fnB()")
        });
        verifySingleInferredProject(session);
        baselineTsserverLogs("declarationFileMaps", "does not jump to source if inlined sources", session);
    });
});
