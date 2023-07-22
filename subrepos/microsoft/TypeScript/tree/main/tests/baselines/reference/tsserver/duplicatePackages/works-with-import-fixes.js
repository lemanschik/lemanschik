currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/node_modules/foo/index.d.ts]
export const foo: number;

//// [/a/node_modules/foo/package.json]
{"name":"foo","version":"1.2.3"}

//// [/b/node_modules/foo/index.d.ts]
export const foo: number;

//// [/b/node_modules/foo/package.json]
{"name":"foo","version":"1.2.3"}

//// [/a/user.ts]
import("foo");
foo

//// [/b/user.ts]
import("foo");
foo

//// [/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/user.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /a
Info seq  [hh:mm:ss:mss] For info: /a/user.ts :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/a/user.ts",
  "/b/user.ts"
 ],
 "options": {
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /b/user.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /b/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /b/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/node_modules/foo/package.json 2000 undefined Project: /tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /b/node_modules/foo/package.json 2000 undefined Project: /tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/node_modules/foo/index.d.ts Text-1 "export const foo: number;"
	/a/user.ts SVC-1-0 "import(\"foo\");\nfoo"
	/b/node_modules/foo/index.d.ts Text-1 "export const foo: number;"
	/b/user.ts Text-1 "import(\"foo\");\nfoo"


	a/node_modules/foo/index.d.ts
	  Imported via "foo" from file 'a/user.ts' with packageId 'foo/index.d.ts@1.2.3'
	a/user.ts
	  Matched by default include pattern '**/*'
	b/node_modules/foo/index.d.ts
	  Imported via "foo" from file 'b/user.ts' with packageId 'foo/index.d.ts@1.2.3'
	  File redirects to file 'a/node_modules/foo/index.d.ts'
	b/user.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/user.ts ProjectRootPath: undefined
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
/a/node_modules/foo/package.json: *new*
  {}
/b/node_modules/foo/package.json: *new*
  {}
/b/user.ts: *new*
  {}
/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}
/a/node_modules: *new*
  {}
/b/node_modules: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/b/user.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /b/user.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /b
Info seq  [hh:mm:ss:mss] For info: /b/user.ts :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/user.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /b/user.ts ProjectRootPath: undefined
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
/a/node_modules/foo/package.json:
  {}
/b/node_modules/foo/package.json:
  {}
/tsconfig.json:
  {}

FsWatches *deleted*::
/b/user.ts:
  {}

FsWatchesRecursive::
/:
  {}
/a/node_modules:
  {}
/b/node_modules:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "getCodeFixes",
      "arguments": {
        "file": "/a/user.ts",
        "startLine": 2,
        "startOffset": 1,
        "endLine": 2,
        "endOffset": 4,
        "errorCodes": [
          2304
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "fixName": "import",
          "description": "Add import from \"foo\"",
          "changes": [
            {
              "fileName": "/a/user.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 1,
                    "offset": 1
                  },
                  "newText": "import { foo } from \"foo\";\n\n"
                }
              ]
            }
          ]
        }
      ],
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "getCodeFixes",
      "arguments": {
        "file": "/b/user.ts",
        "startLine": 2,
        "startOffset": 1,
        "endLine": 2,
        "endOffset": 4,
        "errorCodes": [
          2304
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "fixName": "import",
          "description": "Add import from \"foo\"",
          "changes": [
            {
              "fileName": "/b/user.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 1,
                    "offset": 1
                  },
                  "newText": "import { foo } from \"foo\";\n\n"
                }
              ]
            }
          ]
        }
      ],
      "responseRequired": true
    }
After request
