currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/src/tsconfig.json]
{"compilerOptions":{"target":"es2016","module":"Node16","outDir":"../out","traceResolution":true}}

//// [/user/username/projects/myproject/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/user/username/projects/myproject/src/fileB.mts]
export function foo() {
}


//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}

//// [/a/lib/lib.es2016.full.d.ts]
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
        "file": "/user/username/projects/myproject/src/fileA.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/src
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/src/fileA.ts :: Config file name: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectLoadingStart",
     "body": {
      "projectName": "/user/username/projects/myproject/src/tsconfig.json",
      "reason": "Creating possible configured project for /user/username/projects/myproject/src/fileA.ts to open"
     }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/src/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/src/fileA.ts",
  "/user/username/projects/myproject/src/fileB.mts"
 ],
 "options": {
  "target": 3,
  "module": 100,
  "outDir": "/user/username/projects/myproject/out",
  "traceResolution": true,
  "configFilePath": "/user/username/projects/myproject/src/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/src/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/src/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2016.full.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"


	../../../../../a/lib/lib.es2016.full.d.ts
	  Default library for target 'es2016'
	fileB.mts
	  Imported via "./fileB.mjs" from file 'fileA.ts'
	  Matched by default include pattern '**/*'
	fileA.ts
	  Matched by default include pattern '**/*'
	  File is ECMAScript module because '../package.json' has field "type" with value "module"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectLoadingFinish",
     "body": {
      "projectName": "/user/username/projects/myproject/src/tsconfig.json"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "telemetry",
     "body": {
      "telemetryEventName": "projectInfo",
      "payload": {
       "projectId": "f026568af42c61ce0537de8ee0fa07c9359a76dcfb046248ed49dc76c91e4a37",
       "fileStats": {
        "js": 0,
        "jsSize": 0,
        "jsx": 0,
        "jsxSize": 0,
        "ts": 2,
        "tsSize": 68,
        "tsx": 0,
        "tsxSize": 0,
        "dts": 1,
        "dtsSize": 334,
        "deferred": 0,
        "deferredSize": 0
       },
       "compilerOptions": {
        "target": "es2016",
        "module": "node16",
        "outDir": "",
        "traceResolution": true
       },
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
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "configFileDiag",
     "body": {
      "triggerFile": "/user/username/projects/myproject/src/fileA.ts",
      "configFile": "/user/username/projects/myproject/src/tsconfig.json",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/src/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/src/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.es2016.full.d.ts: *new*
  {}
/user/username/projects/myproject/package.json: *new*
  {}
/user/username/projects/myproject/src/fileb.mts: *new*
  {}
/user/username/projects/myproject/src/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src: *new*
  {}

Info seq  [hh:mm:ss:mss] Modify package json file to remove type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
1: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}


Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
2: /user/username/projects/myproject/src/tsconfig.json
3: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
2: /user/username/projects/myproject/src/tsconfig.json
3: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/myproject/src/fileA.ts"
      ]
     }
    }
After running Timeout callback:: count: 1
4: checkOne

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
5: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "syntaxDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
1: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "semanticDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": [
       {
        "start": {
         "line": 1,
         "offset": 21
        },
        "end": {
         "line": 1,
         "offset": 34
        },
        "text": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/user/username/projects/myproject/package.json'.",
        "code": 1479,
        "category": "error"
       }
      ]
     }
    }
After running Immedidate callback:: count: 1
2: suggestionCheck

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "suggestionDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "requestCompleted",
     "body": {
      "request_seq": 2
     }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] Modify package json file to add type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
6: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
7: /user/username/projects/myproject/src/tsconfig.json
8: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
7: /user/username/projects/myproject/src/tsconfig.json
8: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/myproject/src/fileA.ts"
      ]
     }
    }
After running Timeout callback:: count: 1
9: checkOne

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
10: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "syntaxDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
3: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "semanticDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Immedidate callback:: count: 1
4: suggestionCheck

Before running Immedidate callback:: count: 1
4: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "suggestionDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "requestCompleted",
     "body": {
      "request_seq": 3
     }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] Delete package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
11: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json] deleted

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
12: /user/username/projects/myproject/src/tsconfig.json
13: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
12: /user/username/projects/myproject/src/tsconfig.json
13: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 4 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/myproject/src/fileA.ts"
      ]
     }
    }
After running Timeout callback:: count: 1
14: checkOne

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/user/username/projects/myproject/src/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
15: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "syntaxDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
5: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "semanticDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": [
       {
        "start": {
         "line": 1,
         "offset": 21
        },
        "end": {
         "line": 1,
         "offset": 34
        },
        "text": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.",
        "code": 1479,
        "category": "error"
       }
      ]
     }
    }
After running Immedidate callback:: count: 1
6: suggestionCheck

Before running Immedidate callback:: count: 1
6: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "suggestionDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "requestCompleted",
     "body": {
      "request_seq": 4
     }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] Modify package json file to without type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
16: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}


Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
17: /user/username/projects/myproject/src/tsconfig.json
18: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
17: /user/username/projects/myproject/src/tsconfig.json
18: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 5 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/myproject/src/fileA.ts"
      ]
     }
    }
After running Timeout callback:: count: 1
19: checkOne

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/user/username/projects/myproject/src/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
20: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "syntaxDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
7: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "semanticDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": [
       {
        "start": {
         "line": 1,
         "offset": 21
        },
        "end": {
         "line": 1,
         "offset": 34
        },
        "text": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/user/username/projects/myproject/package.json'.",
        "code": 1479,
        "category": "error"
       }
      ]
     }
    }
After running Immedidate callback:: count: 1
8: suggestionCheck

Before running Immedidate callback:: count: 1
8: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "suggestionDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "requestCompleted",
     "body": {
      "request_seq": 5
     }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] Delete package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
21: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json] deleted

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
22: /user/username/projects/myproject/src/tsconfig.json
23: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
22: /user/username/projects/myproject/src/tsconfig.json
23: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/user/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 6 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/user/username/projects/myproject/src/fileA.ts"
      ]
     }
    }
After running Timeout callback:: count: 1
24: checkOne

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/user/username/projects/myproject/src/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
25: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "syntaxDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
9: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "semanticDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": [
       {
        "start": {
         "line": 1,
         "offset": 21
        },
        "end": {
         "line": 1,
         "offset": 34
        },
        "text": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.",
        "code": 1479,
        "category": "error"
       }
      ]
     }
    }
After running Immedidate callback:: count: 1
10: suggestionCheck

Before running Immedidate callback:: count: 1
10: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "suggestionDiag",
     "body": {
      "file": "/user/username/projects/myproject/src/fileA.ts",
      "diagnostics": []
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "requestCompleted",
     "body": {
      "request_seq": 6
     }
    }
After running Immedidate callback:: count: 0
