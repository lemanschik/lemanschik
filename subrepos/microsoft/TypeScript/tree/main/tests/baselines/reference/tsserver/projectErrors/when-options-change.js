currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/b/app.ts]
let x = 10

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

//// [/a/b/tsconfig.json]
{
                // comment
                "compilerOptions": {
                    "inlineSourceMap": true,
                    "mapRoot": "./"
                }
            }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/app.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /a/b
Info seq  [hh:mm:ss:mss] For info: /a/b/app.ts :: Config file name: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "inlineSourceMap": true,
  "mapRoot": "./",
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/b/app.ts SVC-1-0 "let x = 10"


	../lib/lib.d.ts
	  Default library for target 'es5'
	app.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/app.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

FsWatches::
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/a/b/tsconfig.json",
        "projectFileName": "/a/b/tsconfig.json",
        "includeLinePosition": true
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "message": "Option 'mapRoot' cannot be specified with option 'inlineSourceMap'.",
          "start": 86,
          "length": 17,
          "category": "error",
          "code": 5053,
          "startLocation": {
            "line": 4,
            "offset": 21
          },
          "endLocation": {
            "line": 4,
            "offset": 38
          }
        },
        {
          "message": "Option 'mapRoot' cannot be specified with option 'inlineSourceMap'.",
          "start": 131,
          "length": 9,
          "category": "error",
          "code": 5053,
          "startLocation": {
            "line": 5,
            "offset": 21
          },
          "endLocation": {
            "line": 5,
            "offset": 30
          }
        },
        {
          "message": "Option 'mapRoot' cannot be specified without specifying option 'sourceMap' or option 'declarationMap'.",
          "start": 131,
          "length": 9,
          "category": "error",
          "code": 5069,
          "startLocation": {
            "line": 5,
            "offset": 21
          },
          "endLocation": {
            "line": 5,
            "offset": 30
          }
        }
      ],
      "responseRequired": true
    }
After request

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /a/b/tsconfig.json 1:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Before request
//// [/a/b/tsconfig.json]
{
                "compilerOptions": {
                    "inlineSourceMap": true,
                    "mapRoot": "./"
                }
            }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/a/b/tsconfig.json",
        "projectFileName": "/a/b/tsconfig.json",
        "includeLinePosition": true
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Reloading configured project /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "inlineSourceMap": true,
  "mapRoot": "./",
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/b/app.ts SVC-1-0 "let x = 10"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "message": "Option 'mapRoot' cannot be specified with option 'inlineSourceMap'.",
          "start": 59,
          "length": 17,
          "category": "error",
          "code": 5053,
          "startLocation": {
            "line": 3,
            "offset": 21
          },
          "endLocation": {
            "line": 3,
            "offset": 38
          }
        },
        {
          "message": "Option 'mapRoot' cannot be specified with option 'inlineSourceMap'.",
          "start": 104,
          "length": 9,
          "category": "error",
          "code": 5053,
          "startLocation": {
            "line": 4,
            "offset": 21
          },
          "endLocation": {
            "line": 4,
            "offset": 30
          }
        },
        {
          "message": "Option 'mapRoot' cannot be specified without specifying option 'sourceMap' or option 'declarationMap'.",
          "start": 104,
          "length": 9,
          "category": "error",
          "code": 5069,
          "startLocation": {
            "line": 4,
            "offset": 21
          },
          "endLocation": {
            "line": 4,
            "offset": 30
          }
        }
      ],
      "responseRequired": true
    }
After request
