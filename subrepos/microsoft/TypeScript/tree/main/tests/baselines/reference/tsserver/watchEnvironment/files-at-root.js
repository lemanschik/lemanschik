currentDirectory:: c:/ useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "c:/a/lib/typesMap.json" doesn't exist
Before request
//// [c:/project/tsconfig.json]
{}

//// [c:/project/file1.ts]
let x = 10;

//// [c:/project/file2.ts]
let y = 10;

//// [c:/a/lib/lib.d.ts]
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


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "c:/project/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: c:/project
Info seq  [hh:mm:ss:mss] For info: c:/project/file1.ts :: Config file name: c:/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project c:/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: c:/project/tsconfig.json 2000 undefined Project: c:/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: c:/project/tsconfig.json : {
 "rootNames": [
  "c:/project/file1.ts",
  "c:/project/file2.ts"
 ],
 "options": {
  "configFilePath": "c:/project/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: c:/project 1 undefined Config: c:/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: c:/project 1 undefined Config: c:/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: c:/project/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: c:/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: c:/a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: c:/project/node_modules/@types 1 undefined Project: c:/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: c:/project/node_modules/@types 1 undefined Project: c:/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: c:/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project 'c:/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	c:/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	c:/project/file1.ts SVC-1-0 "let x = 10;"
	c:/project/file2.ts Text-1 "let y = 10;"


	../a/lib/lib.d.ts
	  Default library for target 'es5'
	file1.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project 'c:/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: c:/project/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: c:/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
c:/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
c:/a/lib/lib.d.ts: *new*
  {}
c:/project/file2.ts: *new*
  {}
c:/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
c:/project: *new*
  {}
