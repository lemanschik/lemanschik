currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
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

//// [/src/a.ts]
export class A {}


//// [/src/b.ts]
import {A} from '@ref/a';
export const b = new A();


//// [/src/c.ts]
import {b} from './b';
import {X} from "@ref/a";
b;
X;

//// [/src/refs/a.d.ts]
export class X {}
export class A {}


//// [/src/tsconfig.a.json]
{"compilerOptions": {"composite": true}, "files": ["a.ts"]}


//// [/src/tsconfig.b.json]
{
    "compilerOptions": {
        "composite": true,
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./*" ]
        }
    },
    "files": [ "b.ts" ],
    "references": [ { "path": "tsconfig.a.json" } ]
}


//// [/src/tsconfig.c.json]
{
    "files": [ "c.ts" ],
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./refs/*" ]
        }
    },
    "references": [ { "path": "tsconfig.b.json" } ]
}




Output::
/lib/tsc --b /src/tsconfig.c.json --listFiles
/lib/lib.d.ts
/src/a.ts
/lib/lib.d.ts
/src/a.d.ts
/src/b.ts
/lib/lib.d.ts
/src/a.d.ts
/src/b.d.ts
/src/refs/a.d.ts
/src/c.ts
exitCode:: ExitStatus.Success


//// [/src/a.d.ts]
export declare class A {
}


//// [/src/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;


//// [/src/b.d.ts]
import { A } from '@ref/a';
export declare const b: A;


//// [/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
var a_1 = require("@ref/a");
exports.b = new a_1.A();


//// [/src/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b_1 = require("./b");
var a_1 = require("@ref/a");
b_1.b;
a_1.X;


//// [/src/tsconfig.a.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-8566332115-export class A {}\r\n","signature":"-8728835846-export declare class A {\n}\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./a.d.ts"},"version":"FakeTSVersion"}

//// [/src/tsconfig.a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./a.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-8566332115-export class A {}\r\n",
          "signature": "-8728835846-export declare class A {\n}\n"
        },
        "version": "-8566332115-export class A {}\r\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      }
    },
    "root": [
      [
        2,
        "./a.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./a.ts"
    ],
    "latestChangedDtsFile": "./a.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 829
}

//// [/src/tsconfig.b.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./a.d.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"-13104686224-import {A} from '@ref/a';\r\nexport const b = new A();\r\n","signature":"-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"}],"root":[3],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./b.d.ts"},"version":"FakeTSVersion"}

//// [/src/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "fileNamesList": [
      [
        "./a.d.ts"
      ]
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.d.ts": {
        "version": "-8728835846-export declare class A {\n}\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      },
      "./b.ts": {
        "original": {
          "version": "-13104686224-import {A} from '@ref/a';\r\nexport const b = new A();\r\n",
          "signature": "-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"
        },
        "version": "-13104686224-import {A} from '@ref/a';\r\nexport const b = new A();\r\n",
        "signature": "-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"
      }
    },
    "root": [
      [
        3,
        "./b.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "latestChangedDtsFile": "./b.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 982
}

