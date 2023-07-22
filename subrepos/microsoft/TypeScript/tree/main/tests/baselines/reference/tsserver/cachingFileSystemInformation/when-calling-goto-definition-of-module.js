currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/b/controllers/vessels/client.ts]

                    import { Vessel } from '~/models/vessel';
                    const v = new Vessel();
                

//// [/a/b/utils/db.ts]
export class Bookshelf { }

//// [/a/b/models/vessel.ts]

                    import { Bookshelf } from '~/utils/db';
                    export class Vessel extends Bookshelf {}
                

//// [/a/b/tsconfig.json]
{"compilerOptions":{"target":"es6","module":"es6","baseUrl":"./","paths":{"~/*":["*"]}},"exclude":["api","build","node_modules","public","seeds","sql_updates","tests.build"]}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/controllers/vessels/client.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /a/b/controllers/vessels
Info seq  [hh:mm:ss:mss] For info: /a/b/controllers/vessels/client.ts :: Config file name: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/controllers/vessels/client.ts",
  "/a/b/models/vessel.ts",
  "/a/b/utils/db.ts"
 ],
 "options": {
  "target": 2,
  "module": 5,
  "baseUrl": "/a/b",
  "paths": {
   "~/*": [
    "*"
   ]
  },
  "pathsBasePath": "/a/b",
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/models/vessel.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/utils/db.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.es6.d.ts 500 undefined Project: /a/b/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/b/utils/db.ts Text-1 "export class Bookshelf { }"
	/a/b/models/vessel.ts Text-1 "\n                    import { Bookshelf } from '~/utils/db';\n                    export class Vessel extends Bookshelf {}\n                "
	/a/b/controllers/vessels/client.ts SVC-1-0 "\n                    import { Vessel } from '~/models/vessel';\n                    const v = new Vessel();\n                "


	utils/db.ts
	  Imported via '~/utils/db' from file 'models/vessel.ts'
	  Matched by default include pattern '**/*'
	models/vessel.ts
	  Imported via '~/models/vessel' from file 'controllers/vessels/client.ts'
	  Matched by default include pattern '**/*'
	controllers/vessels/client.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/controllers/vessels/client.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.es6.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a/b/models/vessel.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/b/utils/db.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "definition",
      "arguments": {
        "file": "/a/b/controllers/vessels/client.ts",
        "position": 54
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "file": "/a/b/models/vessel.ts",
          "start": {
            "line": 2,
            "offset": 21
          },
          "end": {
            "line": 4,
            "offset": 17
          }
        }
      ],
      "responseRequired": true
    }
After request

Info seq  [hh:mm:ss:mss] fileExists:: []
Info seq  [hh:mm:ss:mss] directoryExists:: []
Info seq  [hh:mm:ss:mss] getDirectories:: []
Info seq  [hh:mm:ss:mss] readFile:: []
Info seq  [hh:mm:ss:mss] readDirectory:: []
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/models/vessel.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a/b/models/vessel.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /a/b/models
Info seq  [hh:mm:ss:mss] For info: /a/b/models/vessel.ts :: Config file name: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/controllers/vessels/client.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/models/vessel.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.es6.d.ts:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/utils/db.ts:
  {}

FsWatches *deleted*::
/a/b/models/vessel.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

Info seq  [hh:mm:ss:mss] fileExists:: [{"key":"/a/b/models/tsconfig.json","count":1},{"key":"/a/b/models/jsconfig.json","count":1}]
Info seq  [hh:mm:ss:mss] directoryExists:: []
Info seq  [hh:mm:ss:mss] getDirectories:: []
Info seq  [hh:mm:ss:mss] readFile:: []
Info seq  [hh:mm:ss:mss] readDirectory:: []