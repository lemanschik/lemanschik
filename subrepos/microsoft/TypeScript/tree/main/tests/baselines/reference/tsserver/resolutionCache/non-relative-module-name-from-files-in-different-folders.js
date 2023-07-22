currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/user/username/projects/myproject/product/node_modules/module1/index.ts]
export function module1() {}

//// [/user/username/projects/myproject/node_modules/module2/index.ts]
export function module2() {}

//// [/user/username/projects/myproject/product/src/file1.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/src/feature/file2.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/src/file3.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/file4.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"traceResolution":true}}

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


Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/product/src
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/product/src/file1.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/product/src/file1.ts",
  "/user/username/projects/myproject/product/src/feature/file2.ts",
  "/user/username/projects/myproject/product/test/file4.ts",
  "/user/username/projects/myproject/product/test/src/file3.ts"
 ],
 "options": {
  "traceResolution": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module1' from '/user/username/projects/myproject/product/src/file1.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module1/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module1.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module1.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module1.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module1/index.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/user/username/projects/myproject/product/node_modules/module1/index.ts', result '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module1' was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module2' from '/user/username/projects/myproject/product/src/file1.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module2.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module2.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/node_modules/module2.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/node_modules/module2/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/node_modules/module2.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/node_modules/module2.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/node_modules/module2.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/node_modules/module2/index.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/user/username/projects/myproject/node_modules/module2/index.ts', result '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module2' was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module1' from '/user/username/projects/myproject/product/src/feature/file2.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/src/feature/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module1' was found in cache from location '/user/username/projects/myproject/product/src'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module1' was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module2' from '/user/username/projects/myproject/product/src/feature/file2.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/src/feature/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module2' was found in cache from location '/user/username/projects/myproject/product/src'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module2' was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module1' from '/user/username/projects/myproject/product/test/file4.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/test/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module1' was found in cache from location '/user/username/projects/myproject/product'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module1' was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module2' from '/user/username/projects/myproject/product/test/file4.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/test/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module2' was found in cache from location '/user/username/projects/myproject/product'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module2' was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module1' from '/user/username/projects/myproject/product/test/src/file3.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module1' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/test/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module1' was found in cache from location '/user/username/projects/myproject/product/test'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module1' was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'module2' from '/user/username/projects/myproject/product/test/src/file3.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'module2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Directory '/user/username/projects/myproject/product/test/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolution for module 'module2' was found in cache from location '/user/username/projects/myproject/product/test'.
Info seq  [hh:mm:ss:mss] ======== Module name 'module2' was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'. ========
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/product/node_modules/module1/index.ts Text-1 "export function module1() {}"
	/user/username/projects/myproject/node_modules/module2/index.ts Text-1 "export function module2() {}"
	/user/username/projects/myproject/product/src/file1.ts SVC-1-0 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/src/feature/file2.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/file4.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/src/file3.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	product/node_modules/module1/index.ts
	  Imported via "module1" from file 'product/src/file1.ts'
	  Imported via "module1" from file 'product/src/feature/file2.ts'
	  Imported via "module1" from file 'product/test/file4.ts'
	  Imported via "module1" from file 'product/test/src/file3.ts'
	node_modules/module2/index.ts
	  Imported via "module2" from file 'product/src/file1.ts'
	  Imported via "module2" from file 'product/src/feature/file2.ts'
	  Imported via "module2" from file 'product/test/file4.ts'
	  Imported via "module2" from file 'product/test/src/file3.ts'
	product/src/file1.ts
	  Matched by default include pattern '**/*'
	product/src/feature/file2.ts
	  Matched by default include pattern '**/*'
	product/test/file4.ts
	  Matched by default include pattern '**/*'
	product/test/src/file3.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/src/feature/file2.ts 1:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/src/feature/file2.ts 1:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/test/src/file3.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/test/src/file3.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/test/file4.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/test/file4.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 2
5: /user/username/projects/myproject/tsconfig.json
6: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/product/src/file1.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/src/feature/file2.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/src/file3.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/file4.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";


PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/product/src/feature/file2.ts: *new*
  {}
/user/username/projects/myproject/product/test/file4.ts: *new*
  {}
/user/username/projects/myproject/product/test/src/file3.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}
/user/username/projects/myproject/node_modules: *new*
  {}
/user/username/projects/myproject/product: *new*
  {}
/user/username/projects/myproject/product/node_modules: *new*
  {}

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/src/feature/file2.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/src/feature/file2.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/test/file4.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/test/file4.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/test/src/file3.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/test/src/file3.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/product/node_modules/module1/index.ts Text-1 "export function module1() {}"
	/user/username/projects/myproject/node_modules/module2/index.ts Text-1 "export function module2() {}"
	/user/username/projects/myproject/product/src/file1.ts SVC-1-0 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/src/feature/file2.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/file4.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/src/file3.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
After running Timeout callback:: count: 0
