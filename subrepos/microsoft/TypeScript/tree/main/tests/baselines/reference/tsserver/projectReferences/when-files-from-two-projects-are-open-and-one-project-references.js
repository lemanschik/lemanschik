currentDirectory:: / useCaseSensitiveFileNames: true
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

//// [/user/username/projects/myproject/main/src/file1.ts]
export const mainConst = 10;

//// [/user/username/projects/myproject/main/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../core"},{"path":"../indirect"},{"path":"../noCoreRef1"},{"path":"../indirectDisabledChildLoad1"},{"path":"../indirectDisabledChildLoad2"},{"path":"../refToCoreRef3"},{"path":"../indirectNoCoreRef"}]}

//// [/user/username/projects/myproject/core/src/file1.ts]
export const coreConst = 10;

//// [/user/username/projects/myproject/core/tsconfig.json]
{"compilerOptions":{"composite":true}}

//// [/user/username/projects/myproject/noCoreRef1/src/file1.ts]
export const noCoreRef1Const = 10;

//// [/user/username/projects/myproject/noCoreRef1/tsconfig.json]
{"compilerOptions":{"composite":true}}

//// [/user/username/projects/myproject/indirect/src/file1.ts]
export const indirectConst = 10;

//// [/user/username/projects/myproject/indirect/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../coreRef1"}]}

//// [/user/username/projects/myproject/coreRef1/src/file1.ts]
export const coreRef1Const = 10;

//// [/user/username/projects/myproject/coreRef1/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../core"}]}

//// [/user/username/projects/myproject/indirectDisabledChildLoad1/src/file1.ts]
export const indirectDisabledChildLoad1Const = 10;

//// [/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json]
{"compilerOptions":{"composite":true,"disableReferencedProjectLoad":true},"references":[{"path":"../coreRef2"}]}

//// [/user/username/projects/myproject/coreRef2/src/file1.ts]
export const coreRef2Const = 10;

//// [/user/username/projects/myproject/coreRef2/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../core"}]}

//// [/user/username/projects/myproject/indirectDisabledChildLoad2/src/file1.ts]
export const indirectDisabledChildLoad2Const = 10;

//// [/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json]
{"compilerOptions":{"composite":true,"disableReferencedProjectLoad":true},"references":[{"path":"../coreRef3"}]}

//// [/user/username/projects/myproject/coreRef3/src/file1.ts]
export const coreRef3Const = 10;

//// [/user/username/projects/myproject/coreRef3/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../core"}]}

//// [/user/username/projects/myproject/refToCoreRef3/src/file1.ts]
export const refToCoreRef3Const = 10;

//// [/user/username/projects/myproject/refToCoreRef3/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../coreRef3"}]}

//// [/user/username/projects/myproject/indirectNoCoreRef/src/file1.ts]
export const indirectNoCoreRefConst = 10;

//// [/user/username/projects/myproject/indirectNoCoreRef/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../noCoreRef2"}]}

//// [/user/username/projects/myproject/noCoreRef2/src/file1.ts]
export const noCoreRef2Const = 10;

//// [/user/username/projects/myproject/noCoreRef2/tsconfig.json]
{"compilerOptions":{"composite":true}}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/main/src/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main/src
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/src/file1.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/core",
   "originalPath": "../core"
  },
  {
   "path": "/user/username/projects/myproject/indirect",
   "originalPath": "../indirect"
  },
  {
   "path": "/user/username/projects/myproject/noCoreRef1",
   "originalPath": "../noCoreRef1"
  },
  {
   "path": "/user/username/projects/myproject/indirectDisabledChildLoad1",
   "originalPath": "../indirectDisabledChildLoad1"
  },
  {
   "path": "/user/username/projects/myproject/indirectDisabledChildLoad2",
   "originalPath": "../indirectDisabledChildLoad2"
  },
  {
   "path": "/user/username/projects/myproject/refToCoreRef3",
   "originalPath": "../refToCoreRef3"
  },
  {
   "path": "/user/username/projects/myproject/indirectNoCoreRef",
   "originalPath": "../indirectNoCoreRef"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/core/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/core/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/core/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core 1 undefined Config: /user/username/projects/myproject/core/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core 1 undefined Config: /user/username/projects/myproject/core/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/indirect/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirect/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/indirect/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/coreRef1",
   "originalPath": "../coreRef1"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect 1 undefined Config: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect 1 undefined Config: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/coreRef1/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/coreRef1/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/coreRef1/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/core",
   "originalPath": "../core"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1 1 undefined Config: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1 1 undefined Config: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/noCoreRef1/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/noCoreRef1/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/noCoreRef1/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef1/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef1 1 undefined Config: /user/username/projects/myproject/noCoreRef1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef1 1 undefined Config: /user/username/projects/myproject/noCoreRef1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirectDisabledChildLoad1/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "disableReferencedProjectLoad": true,
  "configFilePath": "/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/coreRef2",
   "originalPath": "../coreRef2"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1 1 undefined Config: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1 1 undefined Config: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/coreRef2/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/coreRef2/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/coreRef2/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/core",
   "originalPath": "../core"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef2/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef2 1 undefined Config: /user/username/projects/myproject/coreRef2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef2 1 undefined Config: /user/username/projects/myproject/coreRef2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirectDisabledChildLoad2/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "disableReferencedProjectLoad": true,
  "configFilePath": "/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/coreRef3",
   "originalPath": "../coreRef3"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2 1 undefined Config: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2 1 undefined Config: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/coreRef3/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/coreRef3/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/coreRef3/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/core",
   "originalPath": "../core"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3 1 undefined Config: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3 1 undefined Config: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/refToCoreRef3/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/refToCoreRef3/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/refToCoreRef3/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/coreRef3",
   "originalPath": "../coreRef3"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3 1 undefined Config: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3 1 undefined Config: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/indirectNoCoreRef/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirectNoCoreRef/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/indirectNoCoreRef/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/noCoreRef2",
   "originalPath": "../noCoreRef2"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectNoCoreRef/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectNoCoreRef 1 undefined Config: /user/username/projects/myproject/indirectNoCoreRef/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectNoCoreRef 1 undefined Config: /user/username/projects/myproject/indirectNoCoreRef/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/noCoreRef2/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/noCoreRef2/src/file1.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/noCoreRef2/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef2/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef2 1 undefined Config: /user/username/projects/myproject/noCoreRef2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/noCoreRef2 1 undefined Config: /user/username/projects/myproject/noCoreRef2/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/main/src/file1.ts SVC-1-0 "export const mainConst = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/core/tsconfig.json: *new*
  {}
/user/username/projects/myproject/coreRef1/tsconfig.json: *new*
  {}
/user/username/projects/myproject/coreRef2/tsconfig.json: *new*
  {}
/user/username/projects/myproject/coreRef3/tsconfig.json: *new*
  {}
/user/username/projects/myproject/indirect/tsconfig.json: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json: *new*
  {}
/user/username/projects/myproject/indirectNoCoreRef/tsconfig.json: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}
/user/username/projects/myproject/noCoreRef1/tsconfig.json: *new*
  {}
/user/username/projects/myproject/noCoreRef2/tsconfig.json: *new*
  {}
/user/username/projects/myproject/refToCoreRef3/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/core: *new*
  {}
/user/username/projects/myproject/coreRef1: *new*
  {}
/user/username/projects/myproject/coreRef2: *new*
  {}
/user/username/projects/myproject/coreRef3: *new*
  {}
/user/username/projects/myproject/indirect: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2: *new*
  {}
/user/username/projects/myproject/indirectNoCoreRef: *new*
  {}
/user/username/projects/myproject/main: *new*
  {}
/user/username/projects/myproject/noCoreRef1: *new*
  {}
/user/username/projects/myproject/noCoreRef2: *new*
  {}
/user/username/projects/myproject/refToCoreRef3: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/core/src/file1.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/core/src
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/core/src/file1.ts :: Config file name: /user/username/projects/myproject/core/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/core/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/core/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/core/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/core/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/core/src/file1.ts SVC-1-0 "export const coreConst = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/core
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/core/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/core/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/core/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/core/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/core/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/core/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef1/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef2/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef3/tsconfig.json:
  {}
/user/username/projects/myproject/indirect/tsconfig.json:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json:
  {}
/user/username/projects/myproject/indirectNoCoreRef/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/noCoreRef1/tsconfig.json:
  {}
/user/username/projects/myproject/noCoreRef2/tsconfig.json:
  {}
/user/username/projects/myproject/refToCoreRef3/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/core:
  {}
/user/username/projects/myproject/coreRef1:
  {}
/user/username/projects/myproject/coreRef2:
  {}
/user/username/projects/myproject/coreRef3:
  {}
/user/username/projects/myproject/indirect:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2:
  {}
/user/username/projects/myproject/indirectNoCoreRef:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/noCoreRef1:
  {}
/user/username/projects/myproject/noCoreRef2:
  {}
/user/username/projects/myproject/refToCoreRef3:
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "references",
      "arguments": {
        "file": "/user/username/projects/myproject/core/src/file1.ts",
        "line": 1,
        "offset": 14
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Finding references to /user/username/projects/myproject/core/src/file1.ts position 13 in project /user/username/projects/myproject/core/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/indirect/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/indirect/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirect/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/indirect/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/indirect/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/indirect/src/file1.ts Text-1 "export const indirectConst = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/coreRef1/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/coreRef1/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef1/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/coreRef1/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/coreRef1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/coreRef1/src/file1.ts Text-1 "export const coreRef1Const = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad1/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/indirectDisabledChildLoad1/src/file1.ts Text-1 "export const indirectDisabledChildLoad1Const = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirectDisabledChildLoad2/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/indirectDisabledChildLoad2/src/file1.ts Text-1 "export const indirectDisabledChildLoad2Const = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/refToCoreRef3/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refToCoreRef3/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/refToCoreRef3/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/refToCoreRef3/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/refToCoreRef3/src/file1.ts Text-1 "export const refToCoreRef3Const = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/coreRef3/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3/src/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/coreRef3/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/coreRef3/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/coreRef3/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/coreRef3/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/coreRef3/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/coreRef3/src/file1.ts Text-1 "export const coreRef3Const = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/core/src/file1.d.ts 2000 undefined Project: /user/username/projects/myproject/core/tsconfig.json WatchType: Missing generated file
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "refs": [
          {
            "file": "/user/username/projects/myproject/core/src/file1.ts",
            "start": {
              "line": 1,
              "offset": 14
            },
            "end": {
              "line": 1,
              "offset": 23
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 29
            },
            "lineText": "export const coreConst = 10;",
            "isWriteAccess": true,
            "isDefinition": true
          }
        ],
        "symbolName": "coreConst",
        "symbolStartOffset": 14,
        "symbolDisplayString": "const coreConst: 10"
      },
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/myproject/core/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/core/src/file1.d.ts: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/coreRef1/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/coreRef3/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/indirect/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/indirectDisabledChildLoad1/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/indirectDisabledChildLoad2/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/refToCoreRef3/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/core/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef1/src/file1.ts: *new*
  {}
/user/username/projects/myproject/coreRef1/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef2/tsconfig.json:
  {}
/user/username/projects/myproject/coreRef3/src/file1.ts: *new*
  {}
/user/username/projects/myproject/coreRef3/tsconfig.json:
  {}
/user/username/projects/myproject/indirect/src/file1.ts: *new*
  {}
/user/username/projects/myproject/indirect/tsconfig.json:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1/src/file1.ts: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1/tsconfig.json:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2/src/file1.ts: *new*
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2/tsconfig.json:
  {}
/user/username/projects/myproject/indirectNoCoreRef/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/noCoreRef1/tsconfig.json:
  {}
/user/username/projects/myproject/noCoreRef2/tsconfig.json:
  {}
/user/username/projects/myproject/refToCoreRef3/src/file1.ts: *new*
  {}
/user/username/projects/myproject/refToCoreRef3/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/core:
  {}
/user/username/projects/myproject/coreRef1:
  {}
/user/username/projects/myproject/coreRef2:
  {}
/user/username/projects/myproject/coreRef3:
  {}
/user/username/projects/myproject/indirect:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad1:
  {}
/user/username/projects/myproject/indirectDisabledChildLoad2:
  {}
/user/username/projects/myproject/indirectNoCoreRef:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/noCoreRef1:
  {}
/user/username/projects/myproject/noCoreRef2:
  {}
/user/username/projects/myproject/refToCoreRef3:
  {}
