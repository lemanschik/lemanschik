currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/user/username/projects/myproject/product/node_modules/module1/index.ts]
export function module1() {}

//// [/user/username/projects/myproject/node_modules/module2/index.ts]
export function module2() {}

//// [/user/username/projects/myproject/product/src/file1.ts]
import "./feature/file2"; import "../test/file4"; import "../test/src/file3"; import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/src/feature/file2.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/src/file3.ts]
import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/file4.ts]
import { module1 } from "module1";import { module2 } from "module2";

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
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/product/src/file1.ts :: No config files found.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] ======== Resolving module './feature/file2' from '/user/username/projects/myproject/product/src/file1.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/product/src/feature/file2', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/src/feature/file2.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './feature/file2' was successfully resolved to '/user/username/projects/myproject/product/src/feature/file2.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module '../test/file4' from '/user/username/projects/myproject/product/src/file1.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/product/test/file4', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/test/file4.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name '../test/file4' was successfully resolved to '/user/username/projects/myproject/product/test/file4.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module '../test/src/file3' from '/user/username/projects/myproject/product/src/file1.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/user/username/projects/myproject/product/test/src/file3', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/user/username/projects/myproject/product/test/src/file3.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name '../test/src/file3' was successfully resolved to '/user/username/projects/myproject/product/test/src/file3.ts'. ========
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
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
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
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
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
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
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
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/feature 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/feature 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/test/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/product/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (7)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/product/node_modules/module1/index.ts Text-1 "export function module1() {}"
	/user/username/projects/myproject/node_modules/module2/index.ts Text-1 "export function module2() {}"
	/user/username/projects/myproject/product/src/feature/file2.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/file4.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/src/file3.ts Text-1 "import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/src/file1.ts SVC-1-0 "import \"./feature/file2\"; import \"../test/file4\"; import \"../test/src/file3\"; import { module1 } from \"module1\";import { module2 } from \"module2\";"


	../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../node_modules/module1/index.ts
	  Imported via "module1" from file 'feature/file2.ts'
	  Imported via "module1" from file '../test/file4.ts'
	  Imported via "module1" from file '../test/src/file3.ts'
	  Imported via "module1" from file 'file1.ts'
	../../node_modules/module2/index.ts
	  Imported via "module2" from file 'feature/file2.ts'
	  Imported via "module2" from file '../test/file4.ts'
	  Imported via "module2" from file '../test/src/file3.ts'
	  Imported via "module2" from file 'file1.ts'
	feature/file2.ts
	  Imported via "./feature/file2" from file 'file1.ts'
	../test/file4.ts
	  Imported via "../test/file4" from file 'file1.ts'
	../test/src/file3.ts
	  Imported via "../test/src/file3" from file 'file1.ts'
	file1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/src/feature/file2.ts 1:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/src/feature/file2.ts 1:: WatchInfo: /user/username/projects/myproject/product/src/feature/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/test/src/file3.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/test/src/file3.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/src/file3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/product/test/file4.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/product/test/file4.ts 1:: WatchInfo: /user/username/projects/myproject/product/test/file4.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 2
5: /dev/null/inferredProject1*
6: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/product/src/file1.ts]
import "./feature/file2"; import "../test/file4"; import "../test/src/file3"; import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/src/feature/file2.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/src/file3.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";

//// [/user/username/projects/myproject/product/test/file4.ts]
import { module1 } from "module1";import { module2 } from "module2";import { module1 } from "module1";import { module2 } from "module2";


PolledWatches::
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/product/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/src/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/product/src/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/src/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/src/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/product/test/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/test/src/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/product/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
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

FsWatchesRecursive::
/user/username/projects/myproject/node_modules: *new*
  {}
/user/username/projects/myproject/product/node_modules: *new*
  {}
/user/username/projects/myproject/product/src/feature: *new*
  {}

Info seq  [hh:mm:ss:mss] Running: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Reusing resolution of module './feature/file2' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/src/feature/file2.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '../test/file4' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/test/file4.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module '../test/src/file3' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/test/src/file3.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/src/file1.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/src/feature/file2.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/src/feature/file2.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/test/file4.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/test/file4.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module1' from '/user/username/projects/myproject/product/test/src/file3.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/product/node_modules/module1/index.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'module2' from '/user/username/projects/myproject/product/test/src/file3.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/module2/index.ts'.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (7)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/product/node_modules/module1/index.ts Text-1 "export function module1() {}"
	/user/username/projects/myproject/node_modules/module2/index.ts Text-1 "export function module2() {}"
	/user/username/projects/myproject/product/src/feature/file2.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/file4.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/test/src/file3.ts Text-2 "import { module1 } from \"module1\";import { module2 } from \"module2\";import { module1 } from \"module1\";import { module2 } from \"module2\";"
	/user/username/projects/myproject/product/src/file1.ts SVC-1-0 "import \"./feature/file2\"; import \"../test/file4\"; import \"../test/src/file3\"; import { module1 } from \"module1\";import { module2 } from \"module2\";"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/product/src/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After running Timeout callback:: count: 0
