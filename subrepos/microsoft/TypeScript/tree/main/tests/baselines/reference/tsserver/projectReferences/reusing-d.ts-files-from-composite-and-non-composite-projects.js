currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Creating project service
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

//// [/user/username/projects/myproject/compositea/a.ts]
import { b } from "@ref/compositeb/b";

//// [/user/username/projects/myproject/compositea/a2.ts]
export const x = 10;

//// [/user/username/projects/myproject/compositea/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"../dist/","rootDir":"../","baseUrl":"../","paths":{"@ref/*":["./dist/*"]}}}

//// [/user/username/projects/myproject/dist/compositeb/b.d.ts]
export declare function b(): void;

//// [/user/username/projects/myproject/compositeb/b.ts]
export function b() {}

//// [/user/username/projects/myproject/compositeb/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"../dist/","rootDir":"../","baseUrl":"../","paths":{"@ref/*":["./dist/*"]}}}

//// [/user/username/projects/myproject/compositec/c.ts]
import { b } from "@ref/compositeb/b";

//// [/user/username/projects/myproject/compositec/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"../dist/","rootDir":"../","baseUrl":"../","paths":{"@ref/*":["./*"]}},"references":[{"path":"../compositeb"}]}


Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/compositea
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/compositea/a.ts :: Config file name: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/compositea/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/compositea/a.ts",
  "/user/username/projects/myproject/compositea/a2.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/dist",
  "rootDir": "/user/username/projects/myproject",
  "baseUrl": "/user/username/projects/myproject",
  "paths": {
   "@ref/*": [
    "./dist/*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/compositea",
  "configFilePath": "/user/username/projects/myproject/compositea/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea 1 undefined Config: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea 1 undefined Config: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea/a2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dist/compositeb/b.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dist 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dist 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositea/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositea/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/compositea/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositea/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dist/compositeb/b.d.ts Text-1 "export declare function b(): void;"
	/user/username/projects/myproject/compositea/a.ts SVC-1-0 "import { b } from \"@ref/compositeb/b\";"
	/user/username/projects/myproject/compositea/a2.ts Text-1 "export const x = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dist/compositeb/b.d.ts
	  Imported via "@ref/compositeb/b" from file 'a.ts'
	a.ts
	  Matched by default include pattern '**/*'
	a2.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/compositea
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/compositea/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositea/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/compositea/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/compositec
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/compositec/c.ts :: Config file name: /user/username/projects/myproject/compositec/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/compositec/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositec/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/compositec/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/compositec/c.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/dist",
  "rootDir": "/user/username/projects/myproject",
  "baseUrl": "/user/username/projects/myproject",
  "paths": {
   "@ref/*": [
    "./*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/compositec",
  "configFilePath": "/user/username/projects/myproject/compositec/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/compositeb",
   "originalPath": "../compositeb"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositec 1 undefined Config: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositec 1 undefined Config: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/compositec/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/compositeb/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/compositeb/b.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/dist",
  "rootDir": "/user/username/projects/myproject",
  "baseUrl": "/user/username/projects/myproject",
  "paths": {
   "@ref/*": [
    "./dist/*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/compositeb",
  "configFilePath": "/user/username/projects/myproject/compositeb/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositeb/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositeb 1 undefined Config: /user/username/projects/myproject/compositeb/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositeb 1 undefined Config: /user/username/projects/myproject/compositeb/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositeb/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositec/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/compositec/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/compositec/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/compositec/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositec/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/compositeb/b.ts Text-1 "export function b() {}"
	/user/username/projects/myproject/compositec/c.ts SVC-1-0 "import { b } from \"@ref/compositeb/b\";"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../compositeb/b.ts
	  Imported via "@ref/compositeb/b" from file 'c.ts'
	c.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/compositec
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/compositec/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositea/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositec/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/compositea/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/compositec/c.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/compositec/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/compositea/a2.ts 1:: WatchInfo: /user/username/projects/myproject/compositea/a2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/compositea/a2.ts 1:: WatchInfo: /user/username/projects/myproject/compositea/a2.ts 500 undefined WatchType: Closed Script info
a2Ts modified
//// [/user/username/projects/myproject/compositea/a2.ts]
export const x = 10;export const y = 30;


PolledWatches::
/user/username/projects/myproject/compositea/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/compositec/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/compositea/a2.ts: *new*
  {}
/user/username/projects/myproject/compositea/tsconfig.json: *new*
  {}
/user/username/projects/myproject/compositeb/b.ts: *new*
  {}
/user/username/projects/myproject/compositeb/tsconfig.json: *new*
  {}
/user/username/projects/myproject/compositec/tsconfig.json: *new*
  {}
/user/username/projects/myproject/dist/compositeb/b.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/compositea: *new*
  {}
/user/username/projects/myproject/compositeb: *new*
  {}
/user/username/projects/myproject/compositec: *new*
  {}
/user/username/projects/myproject/dist: *new*
  {}

Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/compositea/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/compositea/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/compositea/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dist/compositeb/b.d.ts Text-1 "export declare function b(): void;"
	/user/username/projects/myproject/compositea/a.ts SVC-1-0 "import { b } from \"@ref/compositeb/b\";"
	/user/username/projects/myproject/compositea/a2.ts Text-2 "export const x = 10;export const y = 30;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------