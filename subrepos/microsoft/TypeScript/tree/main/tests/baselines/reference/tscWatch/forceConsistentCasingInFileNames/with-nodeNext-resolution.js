currentDirectory:: /Users/name/projects/web useCaseSensitiveFileNames: false
Input::
//// [/Users/name/projects/web/src/bin.ts]
import { foo } from "yargs";

//// [/Users/name/projects/web/node_modules/@types/yargs/index.d.ts]
export function foo(): void;

//// [/Users/name/projects/web/node_modules/@types/yargs/index.d.mts]
export function foo(): void;

//// [/Users/name/projects/web/node_modules/@types/yargs/package.json]
{"name":"yargs","version":"17.0.12","exports":{".":{"types":{"import":"./index.d.mts","default":"./index.d.ts"}}}}

//// [/Users/name/projects/web/tsconfig.json]
{"compilerOptions":{"moduleResolution":"nodenext","forceConsistentCasingInFileNames":true,"traceResolution":true}}

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


/a/lib/tsc.js --w --explainFiles
Output::
>> Screen clear
[[90m12:00:35 AM[0m] Starting compilation in watch mode...

File '/Users/name/projects/web/src/package.json' does not exist.
File '/Users/name/projects/web/package.json' does not exist.
File '/Users/name/projects/package.json' does not exist.
File '/Users/name/package.json' does not exist.
File '/Users/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module 'yargs' from '/Users/name/projects/web/src/bin.ts'. ========
Explicitly specified module resolution kind: 'NodeNext'.
Resolving in CJS mode with conditions 'require', 'types', 'node'.
File '/Users/name/projects/web/src/package.json' does not exist according to earlier cached lookups.
File '/Users/name/projects/web/package.json' does not exist according to earlier cached lookups.
File '/Users/name/projects/package.json' does not exist according to earlier cached lookups.
File '/Users/name/package.json' does not exist according to earlier cached lookups.
File '/Users/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'yargs' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/Users/name/projects/web/src/node_modules' does not exist, skipping all lookups in it.
File '/Users/name/projects/web/node_modules/yargs.ts' does not exist.
File '/Users/name/projects/web/node_modules/yargs.tsx' does not exist.
File '/Users/name/projects/web/node_modules/yargs.d.ts' does not exist.
Found 'package.json' at '/Users/name/projects/web/node_modules/@types/yargs/package.json'.
Entering conditional exports.
Matched 'exports' condition 'types'.
Entering conditional exports.
Saw non-matching condition 'import'.
Matched 'exports' condition 'default'.
Using 'exports' subpath '.' with target './index.d.ts'.
File '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts' exists - use it as a name resolution result.
Resolved under condition 'default'.
Exiting conditional exports.
Resolved under condition 'types'.
Exiting conditional exports.
Resolving real path for '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts', result '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts'.
======== Module name 'yargs' was successfully resolved to '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts' with Package ID 'yargs/index.d.ts@17.0.12'. ========
File '/Users/name/projects/web/node_modules/@types/yargs/package.json' exists according to earlier cached lookups.
======== Resolving type reference directive 'yargs', containing file '/Users/name/projects/web/__inferred type names__.ts', root directory '/Users/name/projects/web/node_modules/@types,/Users/name/projects/node_modules/@types,/Users/name/node_modules/@types,/Users/node_modules/@types,/node_modules/@types'. ========
Resolving with primary search path '/Users/name/projects/web/node_modules/@types, /Users/name/projects/node_modules/@types, /Users/name/node_modules/@types, /Users/node_modules/@types, /node_modules/@types'.
File '/Users/name/projects/web/node_modules/@types/yargs/package.json' exists according to earlier cached lookups.
'package.json' does not have a 'typesVersions' field.
'package.json' does not have a 'typings' field.
'package.json' does not have a 'types' field.
'package.json' does not have a 'main' field.
File '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts', result '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts'.
======== Type reference directive 'yargs' was successfully resolved to '/Users/name/projects/web/node_modules/@types/yargs/index.d.ts' with Package ID 'yargs/index.d.ts@17.0.12', primary: true. ========
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[91merror[0m[90m TS5110: [0mOption 'module' must be set to 'NodeNext' when option 'moduleResolution' is set to 'NodeNext'.

../../../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/@types/yargs/index.d.ts
  Imported via "yargs" from file 'src/bin.ts' with packageId 'yargs/index.d.ts@17.0.12'
  Entry point for implicit type library 'yargs' with packageId 'yargs/index.d.ts@17.0.12'
  File is CommonJS module because 'node_modules/@types/yargs/package.json' does not have field "type"
src/bin.ts
  Matched by default include pattern '**/*'
  File is CommonJS module because 'package.json' was not found
[[90m12:00:38 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/Users/name/projects/web/src/bin.ts"]
Program options: {"moduleResolution":99,"forceConsistentCasingInFileNames":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/Users/name/projects/web/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/Users/name/projects/web/node_modules/@types/yargs/index.d.ts
/Users/name/projects/web/src/bin.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/users/name/projects/web/node_modules/@types/yargs/index.d.ts (used version)
/users/name/projects/web/src/bin.ts (used version)

PolledWatches::
/users/name/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/users/name/projects/package.json: *new*
  {"pollingInterval":2000}
/users/name/projects/web/package.json: *new*
  {"pollingInterval":2000}
/users/name/projects/web/src/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/users/name/projects: *new*
  {}
/users/name/projects/web: *new*
  {}
/users/name/projects/web/node_modules/@types/yargs/index.d.ts: *new*
  {}
/users/name/projects/web/node_modules/@types/yargs/package.json: *new*
  {}
/users/name/projects/web/src/bin.ts: *new*
  {}
/users/name/projects/web/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/users/name/projects/web: *new*
  {}
/users/name/projects/web/node_modules: *new*
  {}
/users/name/projects/web/node_modules/@types: *new*
  {}
/users/name/projects/web/src: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/Users/name/projects/web/src/bin.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


