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

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/tsconfig.json]
{
                        "compilerOptions": {},
                        "files": ["/a/b/commonFile1.ts", "/a/b/commonFile2.ts"]
                    }


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:17 AM[0m] Starting compilation in watch mode...

[[90m12:00:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/commonfile1.ts (used version)
/a/b/commonfile2.ts (used version)

FsWatches::
/a/b/commonfile1.ts: *new*
  {}
/a/b/commonfile2.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;



Change:: Modify config without changing content

Input::
//// [/a/b/tsconfig.json] file changed its modified time

Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:25 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:26 AM[0m] Found 0 errors. Watching for file changes.



Program: Same as old program

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

