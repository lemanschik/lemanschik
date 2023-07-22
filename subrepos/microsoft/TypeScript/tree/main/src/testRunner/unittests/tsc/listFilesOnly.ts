import * as Utils from "../../_namespaces/Utils";
import {
    noChangeRun,
    verifyTsc,
} from "../helpers/tsc";
import { loadProjectFromFiles } from "../helpers/vfs";

describe("unittests:: tsc:: listFilesOnly::", () => {
    verifyTsc({
        scenario: "listFilesOnly",
        subScenario: "combined with watch",
        fs: () => loadProjectFromFiles({
            "/src/test.ts": Utils.dedent`
                        export const x = 1;`,
        }),
        commandLineArgs: ["/src/test.ts", "--watch", "--listFilesOnly"]
    });

    verifyTsc({
        scenario: "listFilesOnly",
        subScenario: "loose file",
        fs: () => loadProjectFromFiles({
            "/src/test.ts": Utils.dedent`
                        export const x = 1;`,
        }),
        commandLineArgs: ["/src/test.ts", "--listFilesOnly"]
    });

    verifyTsc({
        scenario: "listFilesOnly",
        subScenario: "combined with incremental",
        fs: () => loadProjectFromFiles({
            "/src/test.ts": `export const x = 1;`,
            "/src/tsconfig.json": "{}"
        }),
        commandLineArgs: ["-p", "/src", "--incremental", "--listFilesOnly"],
        edits: [
            {
                ...noChangeRun,
                commandLineArgs: ["-p", "/src", "--incremental"],
            },
            noChangeRun,
            {
                ...noChangeRun,
                commandLineArgs: ["-p", "/src", "--incremental"],
            }
        ]
    });
});
