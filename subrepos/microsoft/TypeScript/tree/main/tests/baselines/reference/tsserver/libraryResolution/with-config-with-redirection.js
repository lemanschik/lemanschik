currentDirectory:: /home/src/projects useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/home/src/lib/typesMap.json" doesn't exist
Before request
//// [/home/src/projects/project1/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project1/file.ts]
export const file = 10;

//// [/home/src/projects/project1/core.d.ts]
export const core = 10;

//// [/home/src/projects/project1/index.ts]
export const x = "type1";

//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>


//// [/home/src/projects/project1/tsconfig.json]
{"compilerOptions":{"composite":true,"typeRoots":["./typeroot1"],"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project1/typeroot1/sometype/index.d.ts]
export type TheNum = "type1";

//// [/home/src/projects/project2/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project2/index.ts]
export const y = 10

//// [/home/src/projects/project2/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project3/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project3/index.ts]
export const z = 10

//// [/home/src/projects/project3/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project4/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project4/index.ts]
export const z = 10

//// [/home/src/projects/project4/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["esnext","dom","webworker"],"traceResolution":true}}

//// [/home/src/lib/lib.es5.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/lib/lib.esnext.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/lib/lib.dom.d.ts]
interface DOMInterface { }

//// [/home/src/lib/lib.webworker.d.ts]
interface WebWorkerInterface { }

//// [/home/src/lib/lib.scripthost.d.ts]
interface ScriptHostInterface { }

//// [/home/src/projects/node_modules/@typescript/unlreated/index.d.ts]
export const unrelated = 10;

//// [/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts]
interface DOMInterface { }

//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts]
interface WebworkerInterface { }

//// [/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts]
interface ScriptHostInterface { }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/project1/index.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /home/src/projects/project1
Info seq  [hh:mm:ss:mss] For info: /home/src/projects/project1/index.ts :: Config file name: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project1/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project1/core.d.ts",
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts",
  "/home/src/projects/project1/typeroot1/sometype/index.d.ts"
 ],
 "options": {
  "composite": true,
  "typeRoots": [
   "/home/src/projects/project1/typeroot1"
  ],
  "lib": [
   "lib.es5.d.ts",
   "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Config: /home/src/projects/project1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Config: /home/src/projects/project1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/core.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/utils.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1/sometype/index.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-scripthost'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-scripthost' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-es5'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving type reference directive 'sometype', containing file '/home/src/projects/project1/__inferred type names__.ts', root directory '/home/src/projects/project1/typeroot1'. ========
Info seq  [hh:mm:ss:mss] Resolving with primary search path '/home/src/projects/project1/typeroot1'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project1/typeroot1/sometype/index.d.ts', result '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Type reference directive 'sometype' was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts', primary: true. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/project1/core.d.ts Text-1 "export const core = 10;"
	/home/src/projects/project1/file.ts Text-1 "export const file = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-dom/index.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	core.d.ts
	  Matched by default include pattern '**/*'
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /home/src/projects/project1
Info seq  [hh:mm:ss:mss] For info: /home/src/projects/project1/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/project1/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/projects/project1/core.d.ts: *new*
  {}
/home/src/projects/project1/file.ts: *new*
  {}
/home/src/projects/project1/file2.ts: *new*
  {}
/home/src/projects/project1/tsconfig.json: *new*
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts: *new*
  {}
/home/src/projects/project1/utils.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/projects/node_modules: *new*
  {}
/home/src/projects/project1: *new*
  {}
/home/src/projects/project1/typeroot1: *new*
  {}

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Before running Timeout callback:: count: 3
1: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
2: /home/src/projects/project1/tsconfig.json
3: *ensureProjectForOpenFiles*
//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts] deleted

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of type reference directive 'sometype' from '/home/src/projects/project1/__inferred type names__.ts' of old program, it was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.jsx' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-dom' was not resolved. ========
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.dom.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/core.d.ts Text-1 "export const core = 10;"
	/home/src/projects/project1/file.ts Text-1 "export const file = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../../lib/lib.dom.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	core.d.ts
	  Matched by default include pattern '**/*'
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts: *new*
  {}
/home/src/projects/project1/core.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}
/home/src/projects/project1:
  {}
/home/src/projects/project1/typeroot1:
  {}

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project1/file.ts 1:: WatchInfo: /home/src/projects/project1/file.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/file.ts 1:: WatchInfo: /home/src/projects/project1/file.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 2
4: /home/src/projects/project1/tsconfig.json
5: *ensureProjectForOpenFiles*
//// [/home/src/projects/project1/file.ts]
export const file = 10;export const xyz = 10;


Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/core.d.ts Text-1 "export const core = 10;"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (10)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project1/core.d.ts 2:: WatchInfo: /home/src/projects/project1/core.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project1/core.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/core.d.ts 2:: WatchInfo: /home/src/projects/project1/core.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project1/core.d.ts :: WatchInfo: /home/src/projects/project1 1 undefined Config: /home/src/projects/project1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project1/core.d.ts :: WatchInfo: /home/src/projects/project1 1 undefined Config: /home/src/projects/project1/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
8: /home/src/projects/project1/tsconfig.json
9: *ensureProjectForOpenFiles*
//// [/home/src/projects/project1/core.d.ts] deleted

PolledWatches::
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/project1/core.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}
/home/src/projects/project1:
  {}
/home/src/projects/project1/typeroot1:
  {}

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of type reference directive 'sometype' from '/home/src/projects/project1/__inferred type names__.ts' of old program, it was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 4 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../../lib/lib.dom.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Before running Timeout callback:: count: 1
10: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts]
interface DOMInterface { }


Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
11: /home/src/projects/project1/tsconfig.json
12: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
11: /home/src/projects/project1/tsconfig.json
12: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of type reference directive 'sometype' from '/home/src/projects/project1/__inferred type names__.ts' of old program, it was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 5 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts Text-2 "interface DOMInterface { }"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-dom/index.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project1/tsconfig.json 1:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/tsconfig.json 1:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
13: /home/src/projects/project1/tsconfig.json
14: *ensureProjectForOpenFiles*
//// [/home/src/projects/project1/tsconfig.json]
{"compilerOptions":{"composite":true,"typeRoots":["./typeroot1","./typeroot2"],"lib":["es5","dom"],"traceResolution":true}}


Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project1/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts",
  "/home/src/projects/project1/typeroot1/sometype/index.d.ts"
 ],
 "options": {
  "composite": true,
  "typeRoots": [
   "/home/src/projects/project1/typeroot1",
   "/home/src/projects/project1/typeroot2"
  ],
  "lib": [
   "lib.es5.d.ts",
   "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving type reference directive 'sometype', containing file '/home/src/projects/project1/__inferred type names__.ts', root directory '/home/src/projects/project1/typeroot1,/home/src/projects/project1/typeroot2'. ========
Info seq  [hh:mm:ss:mss] Resolving with primary search path '/home/src/projects/project1/typeroot1, /home/src/projects/project1/typeroot2'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project1/typeroot1/sometype/index.d.ts', result '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Type reference directive 'sometype' was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts', primary: true. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot2 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot2 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 6 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts Text-2 "interface DOMInterface { }"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}
/home/src/projects/project1/typeroot2: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}
/home/src/projects/project1:
  {}
/home/src/projects/project1/typeroot1:
  {}

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project1/tsconfig.json 1:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/tsconfig.json 1:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Before running Timeout callback:: count: 3
17: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
18: /home/src/projects/project1/tsconfig.json
19: *ensureProjectForOpenFiles*
//// [/home/src/projects/project1/tsconfig.json]
{"compilerOptions":{"composite":true,"typeRoots":["./typeroot1"],"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts] deleted

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project1/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts",
  "/home/src/projects/project1/typeroot1/sometype/index.d.ts"
 ],
 "options": {
  "composite": true,
  "typeRoots": [
   "/home/src/projects/project1/typeroot1"
  ],
  "lib": [
   "lib.es5.d.ts",
   "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving type reference directive 'sometype', containing file '/home/src/projects/project1/__inferred type names__.ts', root directory '/home/src/projects/project1/typeroot1'. ========
Info seq  [hh:mm:ss:mss] Resolving with primary search path '/home/src/projects/project1/typeroot1'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project1/typeroot1/sometype/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project1/typeroot1/sometype/index.d.ts', result '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Type reference directive 'sometype' was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts', primary: true. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-dom'
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-dom/index.jsx' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-dom' was not resolved. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project1/typeroot2 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project1/typeroot2 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 7 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-1 "interface WebworkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../../lib/lib.dom.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}

PolledWatches *deleted*::
/home/src/projects/project1/typeroot2:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}
/home/src/projects/project1:
  {}
/home/src/projects/project1/typeroot1:
  {}

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Before running Timeout callback:: count: 3
20: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
21: /home/src/projects/project1/tsconfig.json
22: *ensureProjectForOpenFiles*
//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts] deleted

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.jsx' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-webworker' was not resolved. ========
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.webworker.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of type reference directive 'sometype' from '/home/src/projects/project1/__inferred type names__.ts' of old program, it was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 8 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/lib/lib.webworker.d.ts Text-1 "interface WebWorkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../../lib/lib.dom.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	../../lib/lib.webworker.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts:
  {}
/home/src/lib/lib.webworker.d.ts: *new*
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}
/home/src/projects/project1:
  {}
/home/src/projects/project1/typeroot1:
  {}

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project1/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Before running Timeout callback:: count: 1
23: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts]
interface WebWorkerInterface { }


Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
24: /home/src/projects/project1/tsconfig.json
25: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
24: /home/src/projects/project1/tsconfig.json
25: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Scoped package detected, looking in 'typescript__lib-webworker'
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of type reference directive 'sometype' from '/home/src/projects/project1/__inferred type names__.ts' of old program, it was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project1/tsconfig.json Version: 9 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/home/src/lib/lib.dom.d.ts Text-1 "interface DOMInterface { }"
	/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts Text-2 "interface WebWorkerInterface { }"
	/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts Text-1 "interface ScriptHostInterface { }"
	/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
	/home/src/projects/project1/file.ts Text-2 "export const file = 10;export const xyz = 10;"
	/home/src/projects/project1/file2.ts Text-1 "/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n"
	/home/src/projects/project1/index.ts SVC-1-0 "export const x = \"type1\";"
	/home/src/projects/project1/utils.d.ts Text-1 "export const y = 10;"
	/home/src/projects/project1/typeroot1/sometype/index.d.ts Text-1 "export type TheNum = \"type1\";"


	../../lib/lib.dom.d.ts
	  Library 'lib.dom.d.ts' specified in compilerOptions
	../node_modules/@typescript/lib-webworker/index.d.ts
	  Library referenced via 'webworker' from file 'file2.ts'
	../node_modules/@typescript/lib-scripthost/index.d.ts
	  Library referenced via 'scripthost' from file 'file2.ts'
	../node_modules/@typescript/lib-es5/index.d.ts
	  Library referenced via 'es5' from file 'file2.ts'
	  Library 'lib.es5.d.ts' specified in compilerOptions
	file.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	index.ts
	  Matched by default include pattern '**/*'
	utils.d.ts
	  Matched by default include pattern '**/*'
	typeroot1/sometype/index.d.ts
	  Matched by default include pattern '**/*'
	  Entry point for implicit type library 'sometype'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project1/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project1/tsconfig.json
After running Timeout callback:: count: 0
