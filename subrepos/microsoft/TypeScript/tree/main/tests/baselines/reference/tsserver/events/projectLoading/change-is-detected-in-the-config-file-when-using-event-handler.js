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

//// [/user/username/projects/a/a.ts]
export class A { }

//// [/user/username/projects/a/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/a/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/a
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/a/a.ts :: Config file name: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingStart",
     "body": {
      "project": "/user/username/projects/a/tsconfig.json",
      "reason": "Creating possible configured project for /user/username/projects/a/a.ts to open"
     }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/a/a.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/a/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a 1 undefined Config: /user/username/projects/a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a 1 undefined Config: /user/username/projects/a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/a/a.ts SVC-1-0 "export class A { }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingFinish",
     "body": {
      "project": "/user/username/projects/a/tsconfig.json"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectInfo",
     "body": {
      "projectId": "20a91f8dffe761e39e0ada0a62a3058faad15d4a8c135539aaccd61bb5497dea",
      "fileStats": {
       "js": 0,
       "jsSize": 0,
       "jsx": 0,
       "jsxSize": 0,
       "ts": 1,
       "tsSize": 18,
       "tsx": 0,
       "tsxSize": 0,
       "dts": 1,
       "dtsSize": 334,
       "deferred": 0,
       "deferredSize": 0
      },
      "compilerOptions": {},
      "typeAcquisition": {
       "enable": false,
       "include": false,
       "exclude": false
      },
      "extends": false,
      "files": false,
      "include": false,
      "exclude": false,
      "compileOnSave": false,
      "configFileName": "tsconfig.json",
      "projectType": "configured",
      "languageServiceEnabled": true,
      "version": "FakeVersion"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::configFileDiag",
     "body": {
      "configFileName": "/user/username/projects/a/tsconfig.json",
      "diagnostics": [],
      "triggerFile": "/user/username/projects/a/a.ts"
     }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/a/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/a/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/a/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/a: *new*
  {}

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/a/tsconfig.json 1:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/a/tsconfig.json 1:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
1: /user/username/projects/a/tsconfig.json
2: *ensureProjectForOpenFiles*
//// [/user/username/projects/a/tsconfig.json] file written with same contents

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingStart",
     "body": {
      "project": "/user/username/projects/a/tsconfig.json",
      "reason": "Change in config file detected"
     }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/a/a.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/a/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/a/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Same program as before
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingFinish",
     "body": {
      "project": "/user/username/projects/a/tsconfig.json"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::configFileDiag",
     "body": {
      "configFileName": "/user/username/projects/a/tsconfig.json",
      "diagnostics": [],
      "triggerFile": "/user/username/projects/a/tsconfig.json"
     }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/a/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/a/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/a/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/a/a.ts"
      ]
     }
    }
After running Timeout callback:: count: 0
