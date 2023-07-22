currentDirectory:: /user/username/projects/noEmitOnError useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}

//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;

//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }

//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
    "compilerOptions": {
        "outDir": "./dev-build",
        "noEmitOnError": true
    }
}


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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/a/lib/tsc.js --w --isolatedModules
Output::
>> Screen clear
[[90m12:00:31 AM[0m] Starting compilation in watch mode...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90m12:00:32 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/noemitonerror/shared/types/db.ts (used version)
/user/username/projects/noemitonerror/src/main.ts (used version)
/user/username/projects/noemitonerror/src/other.ts (used version)

PolledWatches::
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/noemitonerror/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/noemitonerror/shared/types/db.ts: *new*
  {}
/user/username/projects/noemitonerror/src/main.ts: *new*
  {}
/user/username/projects/noemitonerror/src/other.ts: *new*
  {}
/user/username/projects/noemitonerror/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror: *new*
  {}

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::

exitCode:: ExitStatus.undefined


Change:: Fix Syntax error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};


Before running Timeout callback:: count: 1
2: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:39 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:56 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = {
    lastName: 'sdsd'
};


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hi");



Change:: Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = 10;


Before running Timeout callback:: count: 1
3: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:01:00 AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90m12:01:01 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Before running Timeout callback:: count: 1
4: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::

exitCode:: ExitStatus.undefined


Change:: Fix Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";


Before running Timeout callback:: count: 1
5: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:01:09 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:13 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "hello";



Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Before running Timeout callback:: count: 1
6: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::

exitCode:: ExitStatus.undefined

