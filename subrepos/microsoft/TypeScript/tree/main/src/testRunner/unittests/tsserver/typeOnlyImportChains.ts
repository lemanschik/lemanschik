import * as ts from "../../_namespaces/ts";
import {
    baselineTsserverLogs,
    createLoggerWithInMemoryLogs,
    createSession,
    openFilesForSession,
} from "../helpers/tsserver";
import {
    createServerHost,
    File,
    libFile,
} from "../helpers/virtualFileSystemWithWatch";

describe("unittests:: tsserver:: typeOnlyImportChains", () => {
    it("named export -> type-only namespace import -> named export -> named import", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "import type * as a from './a'; export { a };"
        };
        const c = {
            path: "/c.ts",
            content: "import { a } from './b'; new a.A();"
        };

        assertUsageError("namedExport typeOnlyNamespaceImport namedExport namedImport", [a, b, c], c);
    });

    it("named export -> type-only named import -> named export -> named import", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "import type { A } from './a'; export { A };"
        };
        const c = {
            path: "/c.ts",
            content: "import { A } from './b'; new A();"
        };

        assertUsageError("namedExport typeOnlyNamedImport namedExport namedImport", [a, b, c], c);
    });

    it("named export -> type-only namespace import -> export equals -> import equals", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "import type * as a from './a'; export = a;"
        };
        const c = {
            path: "/c.ts",
            content: "import a = require('./b'); new a.A();"
        };

        assertUsageError("namedExport typeOnlyNamespaceImport exportEquals importEquals", [a, b, c], c);
    });

    it("named export -> type-only namespace import -> export default -> import default", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "import type * as a from './a'; export default a;"
        };
        const c = {
            path: "/c.ts",
            content: "import a from './b'; new a.A();"
        };

        assertUsageError("namedExport typeOnlyNamespaceImport exportDefault importDefault", [a, b, c], c);
    });

    it("export default -> type-only import default -> export default -> import default", () => {
        const a = {
            path: "/a.ts",
            content: "export default class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "import type A from './a'; export default A;"
        };
        const c = {
            path: "/c.ts",
            content: "import A from './b'; new A();"
        };

        assertUsageError("exportDefault typeOnlyImportDefault exportDefault importDefault", [a, b, c], c);
    });

    it("named export -> type-only export from -> export star from -> named import", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "export type { A } from './a';"
        };
        const c = {
            path: "/c.ts",
            content: "export * from './b';"
        };
        const d = {
            path: "/d.ts",
            content: "import { A } from './c'; new A();"
        };

        assertUsageError("namedExport typeOnlyExportFrom exportStarFrom namedImport", [a, b, c, d], d);
    });

    it("named export -> export namespace from -> type-only named import -> named export -> named import", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "export * as a from './a';"
        };
        const c = {
            path: "/c.ts",
            content: "import type { a } from './b'; export { a };"
        };
        const d = {
            path: "/d.ts",
            content: "import { a } from './c'; new a.A();"
        };

        assertUsageError("namedExport exportNamespaceFrom typeOnlyNamedImport namedExport namedImport", [a, b, c, d], d);
    });

    it("named export -> type-only export from -> export namespace from -> named import", () => {
        const a = {
            path: "/a.ts",
            content: "export class A {}"
        };
        const b = {
            path: "/b.ts",
            content: "export type { A } from './a';"
        };
        const c = {
            path: "/c.ts",
            content: "export * as a from './b';"
        };
        const d = {
            path: "/d.ts",
            content: "import { a } from './c'; new a.A();"
        };

        assertUsageError("namedExport typeonlyExportFrom exportNamespaceFrom namedImport", [a, b, c, d], d);
    });
});

function assertUsageError(subScenario: string, files: readonly File[], openFile: File) {
    const host = createServerHost([...files, libFile]);
    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
    openFilesForSession([openFile], session);
    session.executeCommandSeq<ts.server.protocol.SemanticDiagnosticsSyncRequest>({
        command: ts.server.protocol.CommandTypes.SemanticDiagnosticsSync,
        arguments: { file: openFile.path }
    });
    baselineTsserverLogs("typeOnlyImportChains", subScenario, session);
}
