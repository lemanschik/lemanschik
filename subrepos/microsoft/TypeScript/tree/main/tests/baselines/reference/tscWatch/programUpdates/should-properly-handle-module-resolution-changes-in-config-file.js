currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/file1.ts]
import { T } from "module1";

//// [/a/b/node_modules/module1.ts]
export interface T {}

//// [/a/module1.ts]
export interface T {}

//// [/a/b/tsconfig.json]
{
                    "compilerOptions": {
                        "moduleResolution": "node"
                    },
                    "files": ["/a/b/file1.ts"]
                }


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[[90m12:00:24 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1.ts"]
Program options: {"moduleResolution":2,"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/node_modules/module1.ts
/a/b/file1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/node_modules/module1.ts
/a/b/file1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/node_modules/module1.ts (used version)
/a/b/file1.ts (used version)

FsWatches::
/a/b/file1.ts: *new*
  {}
/a/b/node_modules/module1.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



Change:: Change module resolution to classic

Input::
//// [/a/b/tsconfig.json]
{
                        "compilerOptions": {
                            "moduleResolution": "classic"
                        },
                        "files": ["/a/b/file1.ts"]
                    }


Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:28 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1.ts"]
Program options: {"moduleResolution":1,"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/module1.ts
/a/b/file1.ts

Semantic diagnostics in builder refreshed for::
/a/module1.ts
/a/b/file1.ts

Shape signatures in builder refreshed for::
/a/module1.ts (computed .d.ts)
/a/b/file1.ts (computed .d.ts)

FsWatches::
/a/b/file1.ts:
  {}
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}
/a/module1.ts: *new*
  {}

FsWatches *deleted*::
/a/b/node_modules/module1.ts:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/file1.js] file written with same contents
//// [/a/module1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


