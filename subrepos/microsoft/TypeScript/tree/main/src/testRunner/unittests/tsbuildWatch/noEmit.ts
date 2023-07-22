import { libContent } from "../helpers/contents";
import { verifyTscWatch } from "../helpers/tscWatch";
import {
    createWatchedSystem,
    libFile,
} from "../helpers/virtualFileSystemWithWatch";

describe("unittests:: tsbuildWatch:: watchMode:: with noEmit", () => {
    verifyTscWatch({
        scenario: "noEmit",
        subScenario: "does not go in loop when watching when no files are emitted",
        commandLineArgs: ["-b", "-w", "-verbose"],
        sys: () => createWatchedSystem(
            [
                { path: libFile.path, content: libContent },
                { path: `/user/username/projects/myproject/a.js`, content: "" },
                { path: `/user/username/projects/myproject/b.ts`, content: "" },
                { path: `/user/username/projects/myproject/tsconfig.json`, content: JSON.stringify({ compilerOptions: { allowJs: true, noEmit: true } }) },
            ],
            { currentDirectory: "/user/username/projects/myproject" }
        ),
        edits: [
            {
                caption: "No change",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/a.js`, sys.readFile(`/user/username/projects/myproject/a.js`)!),
                // build project
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
            {
                caption: "change",
                edit: sys => sys.writeFile(`/user/username/projects/myproject/a.js`, "const x = 10;"),
                // build project
                timeouts: sys => sys.runQueuedTimeoutCallbacks(),
            },
        ],
        baselineIncremental: true
    });
});