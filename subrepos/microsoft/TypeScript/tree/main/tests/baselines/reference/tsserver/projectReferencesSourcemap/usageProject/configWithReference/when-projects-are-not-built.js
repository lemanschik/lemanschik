currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/dependency/FnS.ts]
export function fn1() { }
export function fn2() { }
export function fn3() { }
export function fn4() { }
export function fn5() { }


//// [/user/username/projects/myproject/dependency/tsconfig.json]
{"compilerOptions":{"composite":true,"declarationMap":true,"declarationDir":"../decls"}}

//// [/user/username/projects/myproject/main/main.ts]
import {
    fn1,
    fn2,
    fn3,
    fn4,
    fn5
} from '../decls/fns'

fn1();
fn2();
fn3();
fn4();
fn5();


//// [/user/username/projects/myproject/main/tsconfig.json]
{"compilerOptions":{"composite":true,"declarationMap":true},"references":[{"path":"../dependency"}]}

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

//// [/user/username/projects/myproject/random/random.ts]
let a = 10;

//// [/user/username/projects/myproject/random/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/main.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-1 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/fns.ts: *new*
  {}
/user/username/projects/myproject/dependency/tsconfig.json: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/random/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/random/random.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/random/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random 1 undefined Config: /user/username/projects/myproject/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random 1 undefined Config: /user/username/projects/myproject/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/random/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/random/random.ts SVC-1-0 "let a = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	random.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definitionAndBoundSpan",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 9,
        "offset": 1
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "definitions": [
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "start": {
              "line": 1,
              "offset": 17
            },
            "end": {
              "line": 1,
              "offset": 20
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 26
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 9,
            "offset": 1
          },
          "end": {
            "line": 9,
            "offset": 4
          }
        }
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definitionAndBoundSpan",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 10,
        "offset": 1
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "definitions": [
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "start": {
              "line": 2,
              "offset": 17
            },
            "end": {
              "line": 2,
              "offset": 20
            },
            "contextStart": {
              "line": 2,
              "offset": 1
            },
            "contextEnd": {
              "line": 2,
              "offset": 26
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 10,
            "offset": 1
          },
          "end": {
            "line": 10,
            "offset": 4
          }
        }
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definitionAndBoundSpan",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 11,
        "offset": 1
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "definitions": [
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "start": {
              "line": 3,
              "offset": 17
            },
            "end": {
              "line": 3,
              "offset": 20
            },
            "contextStart": {
              "line": 3,
              "offset": 1
            },
            "contextEnd": {
              "line": 3,
              "offset": 26
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 11,
            "offset": 1
          },
          "end": {
            "line": 11,
            "offset": 4
          }
        }
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definitionAndBoundSpan",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 12,
        "offset": 1
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "definitions": [
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "start": {
              "line": 4,
              "offset": 17
            },
            "end": {
              "line": 4,
              "offset": 20
            },
            "contextStart": {
              "line": 4,
              "offset": 1
            },
            "contextEnd": {
              "line": 4,
              "offset": 26
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 12,
            "offset": 1
          },
          "end": {
            "line": 12,
            "offset": 4
          }
        }
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definitionAndBoundSpan",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 13,
        "offset": 1
      },
      "seq": 7,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "definitions": [
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "start": {
              "line": 5,
              "offset": 17
            },
            "end": {
              "line": 5,
              "offset": 20
            },
            "contextStart": {
              "line": 5,
              "offset": 1
            },
            "contextEnd": {
              "line": 5,
              "offset": 26
            }
          }
        ],
        "textSpan": {
          "start": {
            "line": 13,
            "offset": 1
          },
          "end": {
            "line": 13,
            "offset": 4
          }
        }
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 8,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 9,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts"
      },
      "seq": 10,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/main.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/main.ts: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 11,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/main.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 12,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/FnS.ts
	/user/username/projects/myproject/main/main.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/main.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/decls:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/dependency/fns.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/main.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
