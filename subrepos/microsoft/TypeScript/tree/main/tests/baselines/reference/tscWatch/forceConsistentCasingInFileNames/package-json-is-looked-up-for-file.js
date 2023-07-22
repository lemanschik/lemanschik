currentDirectory:: /Users/name/projects/lib-boilerplate useCaseSensitiveFileNames: false
Input::
//// [/Users/name/projects/lib-boilerplate/package.json]
{"name":"lib-boilerplate","version":"0.0.2","type":"module","exports":"./src/index.ts"}

//// [/Users/name/projects/lib-boilerplate/src/index.ts]
export function thing(): void {}


//// [/Users/name/projects/lib-boilerplate/test/basic.spec.ts]
import { thing } from 'lib-boilerplate'


//// [/Users/name/projects/lib-boilerplate/tsconfig.json]
{"compilerOptions":{"module":"node16","target":"es2021","forceConsistentCasingInFileNames":true,"traceResolution":true}}

//// [/a/lib/lib.es2021.full.d.ts]
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


/a/lib/tsc.js -w --explainFiles
Output::
>> Screen clear
[[90m12:00:29 AM[0m] Starting compilation in watch mode...

File '/Users/name/projects/lib-boilerplate/src/package.json' does not exist.
Found 'package.json' at '/Users/name/projects/lib-boilerplate/package.json'.
File '/Users/name/projects/lib-boilerplate/test/package.json' does not exist.
File '/Users/name/projects/lib-boilerplate/package.json' exists according to earlier cached lookups.
======== Resolving module 'lib-boilerplate' from '/Users/name/projects/lib-boilerplate/test/basic.spec.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'import', 'types', 'node'.
File '/Users/name/projects/lib-boilerplate/test/package.json' does not exist according to earlier cached lookups.
File '/Users/name/projects/lib-boilerplate/package.json' exists according to earlier cached lookups.
Using 'exports' subpath '.' with target './src/index.ts'.
File '/Users/name/projects/lib-boilerplate/src/index.ts' exists - use it as a name resolution result.
Resolving real path for '/Users/name/projects/lib-boilerplate/src/index.ts', result '/Users/name/projects/lib-boilerplate/src/index.ts'.
======== Module name 'lib-boilerplate' was successfully resolved to '/Users/name/projects/lib-boilerplate/src/index.ts' with Package ID 'lib-boilerplate/src/index.ts@0.0.2'. ========
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
../../../../a/lib/lib.es2021.full.d.ts
  Default library for target 'es2021'
src/index.ts
  Matched by default include pattern '**/*'
  Imported via 'lib-boilerplate' from file 'test/basic.spec.ts' with packageId 'lib-boilerplate/src/index.ts@0.0.2'
  File is ECMAScript module because 'package.json' has field "type" with value "module"
test/basic.spec.ts
  Matched by default include pattern '**/*'
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90m12:00:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/Users/name/projects/lib-boilerplate/src/index.ts","/Users/name/projects/lib-boilerplate/test/basic.spec.ts"]
Program options: {"module":100,"target":8,"forceConsistentCasingInFileNames":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/Users/name/projects/lib-boilerplate/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2021.full.d.ts
/Users/name/projects/lib-boilerplate/src/index.ts
/Users/name/projects/lib-boilerplate/test/basic.spec.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2021.full.d.ts
/Users/name/projects/lib-boilerplate/src/index.ts
/Users/name/projects/lib-boilerplate/test/basic.spec.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2021.full.d.ts (used version)
/users/name/projects/lib-boilerplate/src/index.ts (used version)
/users/name/projects/lib-boilerplate/test/basic.spec.ts (used version)

PolledWatches::
/users/name/projects/lib-boilerplate/node_modules/@types: *new*
  {"pollingInterval":500}
/users/name/projects/lib-boilerplate/src/package.json: *new*
  {"pollingInterval":2000}
/users/name/projects/lib-boilerplate/test/package.json: *new*
  {"pollingInterval":2000}
/users/name/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.es2021.full.d.ts: *new*
  {}
/users/name/projects/lib-boilerplate/package.json: *new*
  {}
/users/name/projects/lib-boilerplate/src/index.ts: *new*
  {}
/users/name/projects/lib-boilerplate/test/basic.spec.ts: *new*
  {}
/users/name/projects/lib-boilerplate/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/users/name/projects/lib-boilerplate: *new*
  {}
/users/name/projects/lib-boilerplate/test: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/Users/name/projects/lib-boilerplate/src/index.js]
export function thing() { }


//// [/Users/name/projects/lib-boilerplate/test/basic.spec.js]
export {};


