currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/b/f1.js]
let x =1;

//// [/a/b/f2.js]
let x =1;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProject",
      "arguments": {
        "rootFiles": [
          {
            "fileName": "/a/b/f1.js"
          },
          {
            "fileName": "/a/b/f2.js"
          }
        ],
        "options": {},
        "projectFileName": "proj1"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Non TS file size exceeded limit (52428800). Largest files: /a/b/f1.js:52428800, /a/b/f2.js:100
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/f1.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/f2.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: proj1
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: proj1 Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project 'proj1' (External)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

FsWatches::
/a/b/f1.js: *new*
  {}
/a/b/f2.js: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/f2.js"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a/b/f2.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project 'proj1' (External)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/f2.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: proj1
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

FsWatches::
/a/b/f1.js:
  {}

FsWatches *deleted*::
/a/b/f2.js:
  {}
