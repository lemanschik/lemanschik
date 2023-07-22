currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/main.ts]
import { value, valueA, valueB, valueC, renamedD, valueE, valueF } from "./mod";

//// [/mod.ts]
export const value = 0;
export const [valueA, valueB] = [0, 1];
export const { valueC, valueD: renamedD } = { valueC: 0, valueD: 1 };
export const { nest: [valueE, { valueF }] } = { nest: [0, { valueF: 1 }] };


//// [/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/main.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /
Info seq  [hh:mm:ss:mss] For info: /main.ts :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/main.ts",
  "/mod.ts"
 ],
 "options": {
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /mod.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/mod.ts Text-1 "export const value = 0;\nexport const [valueA, valueB] = [0, 1];\nexport const { valueC, valueD: renamedD } = { valueC: 0, valueD: 1 };\nexport const { nest: [valueE, { valueF }] } = { nest: [0, { valueF: 1 }] };\n"
	/main.ts SVC-1-0 "import { value, valueA, valueB, valueC, renamedD, valueE, valueF } from \"./mod\";"


	mod.ts
	  Imported via "./mod" from file 'main.ts'
	  Matched by default include pattern '**/*'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/mod.ts: *new*
  {}
/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/mod.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /mod.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /
Info seq  [hh:mm:ss:mss] For info: /mod.ts :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /mod.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/tsconfig.json:
  {}

FsWatches *deleted*::
/mod.ts:
  {}

FsWatchesRecursive::
/:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "references",
      "arguments": {
        "file": "/mod.ts",
        "line": 3,
        "offset": 16
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Finding references to /mod.ts position 79 in project /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "refs": [
          {
            "file": "/mod.ts",
            "start": {
              "line": 3,
              "offset": 16
            },
            "end": {
              "line": 3,
              "offset": 22
            },
            "contextStart": {
              "line": 3,
              "offset": 1
            },
            "contextEnd": {
              "line": 3,
              "offset": 70
            },
            "lineText": "export const { valueC, valueD: renamedD } = { valueC: 0, valueD: 1 };",
            "isWriteAccess": true,
            "isDefinition": true
          },
          {
            "file": "/main.ts",
            "start": {
              "line": 1,
              "offset": 33
            },
            "end": {
              "line": 1,
              "offset": 39
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 81
            },
            "lineText": "import { value, valueA, valueB, valueC, renamedD, valueE, valueF } from \"./mod\";",
            "isWriteAccess": true,
            "isDefinition": false
          },
          {
            "file": "/mod.ts",
            "start": {
              "line": 3,
              "offset": 47
            },
            "end": {
              "line": 3,
              "offset": 53
            },
            "contextStart": {
              "line": 3,
              "offset": 47
            },
            "contextEnd": {
              "line": 3,
              "offset": 56
            },
            "lineText": "export const { valueC, valueD: renamedD } = { valueC: 0, valueD: 1 };",
            "isWriteAccess": true,
            "isDefinition": false
          }
        ],
        "symbolName": "valueC",
        "symbolStartOffset": 16,
        "symbolDisplayString": "const valueC: number"
      },
      "responseRequired": true
    }
After request
