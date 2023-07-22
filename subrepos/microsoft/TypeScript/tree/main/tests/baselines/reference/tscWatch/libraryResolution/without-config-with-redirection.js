currentDirectory:: /home/src/projects useCaseSensitiveFileNames: false
Input::
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


/home/src/lib/tsc.js -w project1/core.d.ts project1/utils.d.ts project1/file.ts project1/index.ts project1/file2.ts --lib es5,dom --traceResolution --explainFiles --extendedDiagnostics
Output::
[[90m12:01:33 AM[0m] Starting compilation in watch mode...

Current directory: /home/src/projects CaseSensitiveFileNames: false
Synchronizing program
CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
FileWatcher:: Added:: WatchInfo: project1/core.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: project1/utils.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: project1/file.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: project1/index.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: project1/file2.ts 250 undefined Source file
======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 250 undefined Source file
======== Resolving module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
======== Module name '@typescript/lib-scripthost' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts 250 undefined Source file
======== Resolving module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-es5/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-es5/index.d.ts 250 undefined Source file
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/core.d.ts
  Root file specified for compilation
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:01:40 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: Not
Program files::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
project1/core.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
project1/core.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project1/core.d.ts (used version)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/file.ts (used version)
/home/src/projects/project1/index.ts (used version)
/home/src/projects/project1/file2.ts (used version)
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)

PolledWatches::
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts: *new*
  {}
/home/src/projects/project1/core.d.ts: *new*
  {}
/home/src/projects/project1/file.ts: *new*
  {}
/home/src/projects/project1/file2.ts: *new*
  {}
/home/src/projects/project1/index.ts: *new*
  {}
/home/src/projects/project1/utils.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/projects/node_modules: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
exports.file = 10;


//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = "type1";


//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>



Change:: delete redirect file dom

Input::
//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts] deleted

Before running Timeout callback:: count: 2
1: timerToUpdateProgram
2: timerToInvalidateFailedLookupResolutions
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 2:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 2:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 250 undefined Source file
DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Synchronizing program
[[90m12:01:42 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
FileWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 250 undefined Source file
Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' does not exist.
Directory '/home/src/projects/node_modules/@types' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Directory '/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/node_modules/@typescript/lib-dom.js' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.jsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.js' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.jsx' does not exist.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name '@typescript/lib-dom' was not resolved. ========
FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.dom.d.ts 250 undefined Source file
../lib/lib.dom.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
project1/core.d.ts
  Root file specified for compilation
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:01:52 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: Not
Program files::
/home/src/lib/lib.dom.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
project1/core.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Semantic diagnostics in builder refreshed for::
/home/src/lib/lib.dom.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
project1/core.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Shape signatures in builder refreshed for::
/home/src/lib/lib.dom.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/project1/core.d.ts (used version)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts)
/home/src/projects/project1/index.ts (computed .d.ts)
/home/src/projects/project1/file2.ts (computed .d.ts)

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts:
  {}
/home/src/projects/project1/core.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js] file written with same contents
//// [/home/src/projects/project1/index.js] file written with same contents
//// [/home/src/projects/project1/file2.js] file written with same contents

Change:: edit index

Input::
//// [/home/src/projects/project1/index.ts]
export const x = "type1";export const xyz = 10;


Before running Timeout callback:: count: 1
3: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with project1/index.ts 1:: WatchInfo: project1/index.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with project1/index.ts 1:: WatchInfo: project1/index.ts 250 undefined Source file
Synchronizing program
[[90m12:01:55 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
../lib/lib.dom.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
project1/core.d.ts
  Root file specified for compilation
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:01:59 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: Completely
Program files::
/home/src/lib/lib.dom.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
project1/core.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Semantic diagnostics in builder refreshed for::
project1/index.ts

Shape signatures in builder refreshed for::
/home/src/projects/project1/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyz = exports.x = void 0;
exports.x = "type1";
exports.xyz = 10;



Change:: delete core

Input::
//// [/home/src/projects/project1/core.d.ts] deleted

Before running Timeout callback:: count: 1
4: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with project1/core.d.ts 2:: WatchInfo: project1/core.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with project1/core.d.ts 2:: WatchInfo: project1/core.d.ts 250 undefined Source file
Synchronizing program
[[90m12:02:01 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
FileWatcher:: Close:: WatchInfo: project1/core.d.ts 250 undefined Source file
Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was not resolved.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/core.d.ts 500 undefined Missing file
[91merror[0m[90m TS6053: [0mFile 'project1/core.d.ts' not found.
  The file is in the program because:
    Root file specified for compilation

../lib/lib.dom.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:02:02 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: Not
Program files::
/home/src/lib/lib.dom.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/core.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.dom.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/project1/core.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}

exitCode:: ExitStatus.undefined


Change:: write redirect file dom

Input::
//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts]
interface DOMInterface { }


Before running Timeout callback:: count: 1
5: timerToInvalidateFailedLookupResolutions
After running Timeout callback:: count: 1
6: timerToUpdateProgram
Before running Timeout callback:: count: 1
6: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling update
Synchronizing program
[[90m12:02:06 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Reusing resolution of module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/index.d.ts 250 undefined Source file
FileWatcher:: Close:: WatchInfo: /home/src/lib/lib.dom.d.ts 250 undefined Source file
[91merror[0m[90m TS6053: [0mFile 'project1/core.d.ts' not found.
  The file is in the program because:
    Root file specified for compilation

node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:02:16 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: SafeModules
Program files::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts)
/home/src/projects/project1/index.ts (computed .d.ts)
/home/src/projects/project1/file2.ts (computed .d.ts)

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/core.d.ts:
  {"pollingInterval":500}

FsWatches::
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/lib/lib.dom.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js] file written with same contents
//// [/home/src/projects/project1/index.js] file written with same contents
//// [/home/src/projects/project1/file2.js] file written with same contents

Change:: delete redirect file webworker

Input::
//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts] deleted

Before running Timeout callback:: count: 2
7: timerToUpdateProgram
8: timerToInvalidateFailedLookupResolutions
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 2:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 2:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 250 undefined Source file
DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Synchronizing program
[[90m12:02:18 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
FileWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 250 undefined Source file
======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' does not exist.
Directory '/home/src/projects/node_modules/@types' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/node_modules/@typescript/lib-webworker.js' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.jsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.js' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.jsx' does not exist.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name '@typescript/lib-webworker' was not resolved. ========
FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.webworker.d.ts 250 undefined Source file
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
[91merror[0m[90m TS6053: [0mFile 'project1/core.d.ts' not found.
  The file is in the program because:
    Root file specified for compilation

../lib/lib.webworker.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:02:28 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: Not
Program files::
/home/src/lib/lib.webworker.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/home/src/lib/lib.webworker.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts)
/home/src/projects/project1/index.ts (computed .d.ts)
/home/src/projects/project1/file2.ts (computed .d.ts)

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/core.d.ts:
  {"pollingInterval":500}

FsWatches::
/home/src/lib/lib.webworker.d.ts: *new*
  {}
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js] file written with same contents
//// [/home/src/projects/project1/index.js] file written with same contents
//// [/home/src/projects/project1/file2.js] file written with same contents

Change:: write redirect file webworker

Input::
//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts]
interface WebworkerInterface { }


Before running Timeout callback:: count: 1
9: timerToInvalidateFailedLookupResolutions
After running Timeout callback:: count: 1
10: timerToUpdateProgram
Before running Timeout callback:: count: 1
10: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts :: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Scheduling update
Synchronizing program
[[90m12:02:32 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
  options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts 250 undefined Source file
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
Reusing resolution of module '@typescript/lib-es5' from '/home/src/projects/__lib_node_modules_lookup_lib.es5.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
Reusing resolution of module '@typescript/lib-dom' from '/home/src/projects/__lib_node_modules_lookup_lib.dom.d.ts__.ts' of old program, it was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
FileWatcher:: Close:: WatchInfo: /home/src/lib/lib.webworker.d.ts 250 undefined Source file
[91merror[0m[90m TS6053: [0mFile 'project1/core.d.ts' not found.
  The file is in the program because:
    Root file specified for compilation

node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/utils.d.ts
  Root file specified for compilation
project1/file.ts
  Root file specified for compilation
project1/index.ts
  Root file specified for compilation
project1/file2.ts
  Root file specified for compilation
[[90m12:02:42 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["project1/core.d.ts","project1/utils.d.ts","project1/file.ts","project1/index.ts","project1/file2.ts"]
Program options: {"watch":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"explainFiles":true,"extendedDiagnostics":true}
Program structureReused: SafeModules
Program files::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
project1/utils.d.ts
project1/file.ts
project1/index.ts
project1/file2.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts)
/home/src/projects/project1/index.ts (computed .d.ts)
/home/src/projects/project1/file2.ts (computed .d.ts)

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/core.d.ts:
  {"pollingInterval":500}

FsWatches::
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts:
  {}
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts: *new*
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/lib/lib.webworker.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js] file written with same contents
//// [/home/src/projects/project1/index.js] file written with same contents
//// [/home/src/projects/project1/file2.js] file written with same contents
