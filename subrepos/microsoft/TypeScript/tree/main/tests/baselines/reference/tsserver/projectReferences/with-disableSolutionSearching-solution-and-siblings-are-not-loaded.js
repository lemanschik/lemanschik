currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
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

//// [/user/username/projects/solution/tsconfig.json]
{"files":[],"include":[],"references":[{"path":"./compiler"},{"path":"./services"}]}

//// [/user/username/projects/solution/compiler/tsconfig.json]
{"compilerOptions":{"composite":true,"module":"none","disableSolutionSearching":true},"files":["./types.ts","./program.ts"]}

//// [/user/username/projects/solution/compiler/types.ts]

                namespace ts {
                    export interface Program {
                        getSourceFiles(): string[];
                    }
                }

//// [/user/username/projects/solution/compiler/program.ts]

                namespace ts {
                    export const program: Program = {
                        getSourceFiles: () => [getSourceFile()]
                    };
                    function getSourceFile() { return "something"; }
                }

//// [/user/username/projects/solution/services/tsconfig.json]
{"compilerOptions":{"composite":true},"files":["./services.ts"],"references":[{"path":"../compiler"}]}

//// [/user/username/projects/solution/services/services.ts]

                namespace ts {
                    const result = program.getSourceFiles();
                }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/solution/compiler/program.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/solution/compiler
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/solution/compiler/program.ts :: Config file name: /user/username/projects/solution/compiler/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/solution/compiler/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/tsconfig.json 2000 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/solution/compiler/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/solution/compiler/types.ts",
  "/user/username/projects/solution/compiler/program.ts"
 ],
 "options": {
  "composite": true,
  "module": 0,
  "disableSolutionSearching": true,
  "configFilePath": "/user/username/projects/solution/compiler/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/types.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/solution/compiler/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/solution/compiler/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/solution/compiler/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/solution/compiler/types.ts Text-1 "\n                namespace ts {\n                    export interface Program {\n                        getSourceFiles(): string[];\n                    }\n                }"
	/user/username/projects/solution/compiler/program.ts SVC-1-0 "\n                namespace ts {\n                    export const program: Program = {\n                        getSourceFiles: () => [getSourceFile()]\n                    };\n                    function getSourceFile() { return \"something\"; }\n                }"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	types.ts
	  Part of 'files' list in tsconfig.json
	program.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/solution/compiler/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/solution/compiler/program.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/solution/compiler/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/solution/compiler/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/solution/compiler/tsconfig.json: *new*
  {}
/user/username/projects/solution/compiler/types.ts: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "references",
      "arguments": {
        "file": "/user/username/projects/solution/compiler/program.ts",
        "line": 4,
        "offset": 25
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Finding references to /user/username/projects/solution/compiler/program.ts position 110 in project /user/username/projects/solution/compiler/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "refs": [
          {
            "file": "/user/username/projects/solution/compiler/types.ts",
            "start": {
              "line": 4,
              "offset": 25
            },
            "end": {
              "line": 4,
              "offset": 39
            },
            "contextStart": {
              "line": 4,
              "offset": 25
            },
            "contextEnd": {
              "line": 4,
              "offset": 52
            },
            "lineText": "                        getSourceFiles(): string[];",
            "isWriteAccess": false,
            "isDefinition": false
          },
          {
            "file": "/user/username/projects/solution/compiler/program.ts",
            "start": {
              "line": 4,
              "offset": 25
            },
            "end": {
              "line": 4,
              "offset": 39
            },
            "contextStart": {
              "line": 4,
              "offset": 25
            },
            "contextEnd": {
              "line": 4,
              "offset": 64
            },
            "lineText": "                        getSourceFiles: () => [getSourceFile()]",
            "isWriteAccess": true,
            "isDefinition": true
          }
        ],
        "symbolName": "getSourceFiles",
        "symbolStartOffset": 25,
        "symbolDisplayString": "(method) ts.Program.getSourceFiles(): string[]"
      },
      "responseRequired": true
    }
After request
