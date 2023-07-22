import {
    createSolutionBuilder,
    createSystemWithSolutionBuild,
} from "../helpers/solutionBuilder";
import { verifyTscWatch } from "../helpers/tscWatch";
import {
    getTsBuildProjectFile,
    getTsBuildProjectFilePath,
    libFile,
    TestServerHost,
} from "../helpers/virtualFileSystemWithWatch";

describe("unittests:: tsc-watch:: projects with references: invoking when references are already built", () => {
    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "on sample project",
        sys: () => createSystemWithSolutionBuild(
            ["tests"],
            [
                libFile,
                getTsBuildProjectFile("sample1", "core/tsconfig.json"),
                getTsBuildProjectFile("sample1", "core/index.ts"),
                getTsBuildProjectFile("sample1", "core/anotherModule.ts"),
                getTsBuildProjectFile("sample1", "core/some_decl.d.ts"),
                getTsBuildProjectFile("sample1", "logic/tsconfig.json"),
                getTsBuildProjectFile("sample1", "logic/index.ts"),
                getTsBuildProjectFile("sample1", "tests/tsconfig.json"),
                getTsBuildProjectFile("sample1", "tests/index.ts"),
            ],
            { currentDirectory: `/user/username/projects/sample1` }
        ),
        commandLineArgs: ["-w", "-p", "tests", "--traceResolution", "--explainFiles"],
        edits: [
            {
                caption: "local edit in logic ts, and build logic",
                edit: sys => {
                    sys.appendFile(getTsBuildProjectFilePath("sample1", "logic/index.ts"), `function foo() { }`);
                    const solutionBuilder = createSolutionBuilder(sys, ["logic"]);
                    solutionBuilder.build();
                },
                // not ideal, but currently because of d.ts but no new file is written
                // There will be timeout queued even though file contents are same
                timeouts: sys => sys.logTimeoutQueueLength(),
            },
            {
                caption: "non local edit in logic ts, and build logic",
                edit: sys => {
                    sys.appendFile(getTsBuildProjectFilePath("sample1", "logic/index.ts"), `export function gfoo() { }`);
                    const solutionBuilder = createSolutionBuilder(sys, ["logic"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "change in project reference config file builds correctly",
                edit: sys => {
                    sys.writeFile(getTsBuildProjectFilePath("sample1", "logic/tsconfig.json"), JSON.stringify({
                        compilerOptions: { composite: true, declaration: true, declarationDir: "decls" },
                        references: [{ path: "../core" }]
                    }));
                    const solutionBuilder = createSolutionBuilder(sys, ["logic"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
        ],
        baselineDependencies: true
    });

    function changeCompilerOpitonsPaths(sys: TestServerHost, config: string, newPaths: object) {
        const configJson = JSON.parse(sys.readFile(config)!);
        configJson.compilerOptions.paths = newPaths;
        sys.writeFile(config, JSON.stringify(configJson));
    }

    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "on transitive references",
        sys: () => createSystemWithSolutionBuild(
            ["tsconfig.c.json"],
            [
                libFile,
                getTsBuildProjectFile("transitiveReferences", "tsconfig.a.json"),
                getTsBuildProjectFile("transitiveReferences", "tsconfig.b.json"),
                getTsBuildProjectFile("transitiveReferences", "tsconfig.c.json"),
                getTsBuildProjectFile("transitiveReferences", "a.ts"),
                getTsBuildProjectFile("transitiveReferences", "b.ts"),
                getTsBuildProjectFile("transitiveReferences", "c.ts"),
                getTsBuildProjectFile("transitiveReferences", "refs/a.d.ts"),
            ],
            { currentDirectory: `/user/username/projects/transitiveReferences` }
        ),
        commandLineArgs: ["-w", "-p", "tsconfig.c.json", "--traceResolution", "--explainFiles"],
        edits: [
            {
                caption: "non local edit b ts, and build b",
                edit: sys => {
                    sys.appendFile(getTsBuildProjectFilePath("transitiveReferences", "b.ts"), `export function gfoo() { }`);
                    const solutionBuilder = createSolutionBuilder(sys, ["tsconfig.b.json"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit on config file",
                edit: sys => {
                    sys.ensureFileOrFolder({
                        path: getTsBuildProjectFilePath("transitiveReferences", "nrefs/a.d.ts"),
                        content: sys.readFile(getTsBuildProjectFilePath("transitiveReferences", "refs/a.d.ts"))!
                    });
                    changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "tsconfig.c.json"), { "@ref/*": ["./nrefs/*"] });
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "tsconfig.c.json"), { "@ref/*": ["./refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit in referenced config file",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "tsconfig.b.json"), { "@ref/*": ["./nrefs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert referenced config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "tsconfig.b.json"), { "@ref/*": ["./refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "tsconfig.b.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting referenced config file",
                edit: sys => sys.ensureFileOrFolder(getTsBuildProjectFile("transitiveReferences", "tsconfig.b.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting transitively referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "tsconfig.a.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting transitively referenced config file",
                edit: sys => sys.ensureFileOrFolder(getTsBuildProjectFile("transitiveReferences", "tsconfig.a.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
        ],
        baselineDependencies: true,
    });

    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "when referenced project uses different module resolution",
        sys: () => createSystemWithSolutionBuild(
            ["tsconfig.c.json"],
            [
                libFile,
                getTsBuildProjectFile("transitiveReferences", "tsconfig.a.json"),
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "tsconfig.b.json"),
                    content: JSON.stringify({
                        compilerOptions: { composite: true, moduleResolution: "classic" },
                        files: ["b.ts"],
                        references: [{ path: "tsconfig.a.json" }]
                    })
                },
                getTsBuildProjectFile("transitiveReferences", "tsconfig.c.json"),
                getTsBuildProjectFile("transitiveReferences", "a.ts"),
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "b.ts"),
                    content: `import {A} from "a";export const b = new A();`
                },
                getTsBuildProjectFile("transitiveReferences", "c.ts"),
                getTsBuildProjectFile("transitiveReferences", "refs/a.d.ts"),
            ],
            { currentDirectory: `/user/username/projects/transitiveReferences` }
        ),
        commandLineArgs: ["-w", "-p", "tsconfig.c.json", "--traceResolution", "--explainFiles"],
        baselineDependencies: true,
    });

    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "on transitive references in different folders",
        sys: () => createSystemWithSolutionBuild(
            ["c"],
            [
                libFile,
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json"),
                    content: JSON.stringify({
                        compilerOptions: { composite: true },
                        files: ["index.ts"]
                    }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"),
                    content: JSON.stringify({
                        compilerOptions: { composite: true, baseUrl: "./", paths: { "@ref/*": ["../*"] } },
                        files: ["index.ts"],
                        references: [{ path: `../a` }]
                    }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"),
                    content: JSON.stringify({
                        compilerOptions: { baseUrl: "./", paths: { "@ref/*": ["../refs/*"] } },
                        files: ["index.ts"],
                        references: [{ path: `../b` }]
                    }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "a/index.ts"),
                    content: `export class A {}`,
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "b/index.ts"),
                    content: `import {A} from '@ref/a';
export const b = new A();`,
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "c/index.ts"),
                    content: `import {b} from '../b';
import {X} from "@ref/a";
b;
X;`,
                },
                getTsBuildProjectFile("transitiveReferences", "refs/a.d.ts"),
            ],
            { currentDirectory: `/user/username/projects/transitiveReferences` }
        ),
        commandLineArgs: ["-w", "-p", "c", "--traceResolution", "--explainFiles"],
        edits: [
            {
                caption: "non local edit b ts, and build b",
                edit: sys => {
                    sys.appendFile(getTsBuildProjectFilePath("transitiveReferences", "b/index.ts"), `export function gfoo() { }`);
                    const solutionBuilder = createSolutionBuilder(sys, ["b"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit on config file",
                edit: sys => {
                    sys.ensureFileOrFolder({
                        path: getTsBuildProjectFilePath("transitiveReferences", "nrefs/a.d.ts"),
                        content: sys.readFile(getTsBuildProjectFilePath("transitiveReferences", "refs/a.d.ts"))!
                    });
                    changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"), { "@ref/*": ["../nrefs/*"] });
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"), { "@ref/*": ["../refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit in referenced config file",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"), { "@ref/*": ["../nrefs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert referenced config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"), { "@ref/*": ["../refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting referenced config file",
                edit: sys => sys.writeFile(
                    getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"),
                    JSON.stringify({
                        compilerOptions: { composite: true, baseUrl: "./", paths: { "@ref/*": ["../*"] } },
                        files: ["index.ts"],
                        references: [{ path: `../a` }]
                    })
                ),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting transitively referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting transitively referenced config file",
                edit: sys => sys.writeFile(
                    getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json"),
                    JSON.stringify({
                        compilerOptions: { composite: true },
                        files: ["index.ts"]
                    }),
                ),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
        ],
        baselineDependencies: true,
    });

    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "on transitive references in different folders with no files clause",
        sys: () => createSystemWithSolutionBuild(
            ["c"],
            [
                libFile,
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json"),
                    content: JSON.stringify({ compilerOptions: { composite: true } }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"),
                    content: JSON.stringify({
                        compilerOptions: { composite: true, baseUrl: "./", paths: { "@ref/*": ["../*"] } },
                        references: [{ path: `../a` }]
                    }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"),
                    content: JSON.stringify({
                        compilerOptions: { baseUrl: "./", paths: { "@ref/*": ["../refs/*"] } },
                        references: [{ path: `../b` }]
                    }),
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "a/index.ts"),
                    content: `export class A {}`,
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "b/index.ts"),
                    content: `import {A} from '@ref/a';
export const b = new A();`,
                },
                {
                    path: getTsBuildProjectFilePath("transitiveReferences", "c/index.ts"),
                    content: `import {b} from '../b';
import {X} from "@ref/a";
b;
X;`,
                },
                getTsBuildProjectFile("transitiveReferences", "refs/a.d.ts"),
            ],
            { currentDirectory: `/user/username/projects/transitiveReferences` }
        ),
        commandLineArgs: ["-w", "-p", "c", "--traceResolution", "--explainFiles"],
        edits: [
            {
                caption: "non local edit b ts, and build b",
                edit: sys => {
                    sys.appendFile(getTsBuildProjectFilePath("transitiveReferences", "b/index.ts"), `export function gfoo() { }`);
                    const solutionBuilder = createSolutionBuilder(sys, ["b"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit on config file",
                edit: sys => {
                    sys.ensureFileOrFolder({
                        path: getTsBuildProjectFilePath("transitiveReferences", "nrefs/a.d.ts"),
                        content: sys.readFile(getTsBuildProjectFilePath("transitiveReferences", "refs/a.d.ts"))!
                    });
                    changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"), { "@ref/*": ["../nrefs/*"] });
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "c/tsconfig.json"), { "@ref/*": ["../refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "edit in referenced config file",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"), { "@ref/*": ["../nrefs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert referenced config file edit",
                edit: sys => changeCompilerOpitonsPaths(sys, getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"), { "@ref/*": ["../refs/*"] }),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting referenced config file",
                edit: sys => sys.writeFile(
                    getTsBuildProjectFilePath("transitiveReferences", "b/tsconfig.json"),
                    JSON.stringify({
                        compilerOptions: { composite: true, baseUrl: "./", paths: { "@ref/*": ["../*"] } },
                        references: [{ path: `../a` }]
                    })
                ),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "deleting transitively referenced config file",
                edit: sys => sys.deleteFile(getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json")),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
            {
                caption: "Revert deleting transitively referenced config file",
                edit: sys => sys.writeFile(
                    getTsBuildProjectFilePath("transitiveReferences", "a/tsconfig.json"),
                    JSON.stringify({ compilerOptions: { composite: true } }),
                ),
                timeouts: sys => sys.runQueuedTimeoutCallbacks()
            },
        ],
        baselineDependencies: true,
    });

    verifyTscWatch({
        scenario: "projectsWithReferences",
        subScenario: "when declarationMap changes for dependency",
        sys: () => createSystemWithSolutionBuild(
            ["core"],
            [
                libFile,
                getTsBuildProjectFile("sample1", "core/tsconfig.json"),
                getTsBuildProjectFile("sample1", "core/index.ts"),
                getTsBuildProjectFile("sample1", "core/anotherModule.ts"),
                getTsBuildProjectFile("sample1", "core/some_decl.d.ts"),
                getTsBuildProjectFile("sample1", "logic/tsconfig.json"),
                getTsBuildProjectFile("sample1", "logic/index.ts"),
            ],
            { currentDirectory: `/user/username/projects/sample1` }
        ),
        commandLineArgs: ["-w", "-p", "logic", "--traceResolution", "--explainFiles"],
        edits: [
            {
                caption: "change declration map in core",
                edit: sys => {
                    sys.replaceFileText(getTsBuildProjectFilePath("sample1", "core/tsconfig.json"), `"declarationMap": true,`, `"declarationMap": false,`);
                    const solutionBuilder = createSolutionBuilder(sys, ["core"]);
                    solutionBuilder.build();
                },
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ],
        baselineDependencies: true
    });
});