currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/b/app.ts]
let x = 10

//// [/a/b/tsconfig.json]
{
                        "compilerOptions": {}
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


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:18 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/app.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/app.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/app.ts (used version)

FsWatches::
/a/b/app.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/app.js]
var x = 10;


