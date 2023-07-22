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

//// [/src/animals/animal.ts]
export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}


//// [/src/animals/dog.ts]
import Animal from '.';
import { makeRandomName } from '../core/utilities';

export interface Dog extends Animal {
    woof(): void;
    name: string;
}

export function createDog(): Dog {
    return ({
        size: "medium",
        woof: function(this: Dog) {
            console.log(`${this.name} says "Woof"!`);
        },
        name: makeRandomName()
    });
}



//// [/src/animals/index.ts]
import Animal from './animal';

export default Animal;
import { createDog, Dog } from './dog';
export { createDog, Dog };


//// [/src/animals/tsconfig.json]
{
  "extends": "../tsconfig-base.json",
  "compilerOptions": {
    "outDir": "../lib/animals",
    "rootDir": ".",
  },
  "references": [
    { "path": "../core" }
  ]
}


//// [/src/core/tsconfig.json]
{
  "extends": "../tsconfig-base.json",
  "compilerOptions": {
    "outDir": "../lib/core",
    "rootDir": "."
  }
}

//// [/src/core/utilities.ts]

export function makeRandomName() {
    return "Bob!?! ";
}

export function lastElementOf<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
}



//// [/src/tsconfig-base.json]
{
    "compilerOptions": {
        "declaration": true,
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "composite": true
    }
}

//// [/src/tsconfig.json]
{
  "files": [],
  "references": [
    {
      "path": "./core"
    },
    {
      "path": "./animals"
    },
    {
      "path": "./zoo"
    }
  ]
}

//// [/src/zoo/tsconfig.json]
{
  "extends": "../tsconfig-base.json",
  "compilerOptions": {
    "outDir": "../lib/zoo",
    "rootDir": "."
  },
  "references": [
    {
      "path": "../animals"
    }
  ]
}

//// [/src/zoo/zoo.ts]
import { Dog, createDog } from '../animals/index';

export function createZoo(): Array<Dog> {
    return [
        createDog()
    ];
}





Output::
/lib/tsc --b /src/tsconfig.json --verbose
[[90m12:00:06 AM[0m] Projects in this build: 
    * src/core/tsconfig.json
    * src/animals/tsconfig.json
    * src/zoo/tsconfig.json
    * src/tsconfig.json

[[90m12:00:07 AM[0m] Project 'src/core/tsconfig.json' is out of date because output file 'src/lib/core/tsconfig.tsbuildinfo' does not exist

[[90m12:00:08 AM[0m] Building project '/src/core/tsconfig.json'...

[[90m12:00:16 AM[0m] Project 'src/animals/tsconfig.json' is out of date because output file 'src/lib/animals/tsconfig.tsbuildinfo' does not exist

[[90m12:00:17 AM[0m] Building project '/src/animals/tsconfig.json'...

[[90m12:00:28 AM[0m] Project 'src/zoo/tsconfig.json' is out of date because output file 'src/lib/zoo/tsconfig.tsbuildinfo' does not exist

[[90m12:00:29 AM[0m] Building project '/src/zoo/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/lib/animals/animal.d.ts]
export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}


//// [/src/lib/animals/animal.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/lib/animals/dog.d.ts]
import Animal from '.';
export interface Dog extends Animal {
    woof(): void;
    name: string;
}
export declare function createDog(): Dog;


//// [/src/lib/animals/dog.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = void 0;
var utilities_1 = require("../core/utilities");
function createDog() {
    return ({
        size: "medium",
        woof: function () {
            console.log("".concat(this.name, " says \"Woof\"!"));
        },
        name: (0, utilities_1.makeRandomName)()
    });
}
exports.createDog = createDog;


//// [/src/lib/animals/index.d.ts]
import Animal from './animal';
export default Animal;
import { createDog, Dog } from './dog';
export { createDog, Dog };


//// [/src/lib/animals/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = void 0;
var dog_1 = require("./dog");
Object.defineProperty(exports, "createDog", { enumerable: true, get: function () { return dog_1.createDog; } });


//// [/src/lib/animals/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","../../animals/animal.ts","../../animals/index.ts","../core/utilities.d.ts","../../animals/dog.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-14984181202-export type Size = \"small\" | \"medium\" | \"large\";\r\nexport default interface Animal {\r\n    size: Size;\r\n}\r\n","signature":"-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n"},{"version":"-5382672599-import Animal from './animal';\r\n\r\nexport default Animal;\r\nimport { createDog, Dog } from './dog';\r\nexport { createDog, Dog };\r\n","signature":"1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n"},"-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n",{"version":"-10991948013-import Animal from '.';\r\nimport { makeRandomName } from '../core/utilities';\r\n\r\nexport interface Dog extends Animal {\r\n    woof(): void;\r\n    name: string;\r\n}\r\n\r\nexport function createDog(): Dog {\r\n    return ({\r\n        size: \"medium\",\r\n        woof: function(this: Dog) {\r\n            console.log(`${this.name} says \"Woof\"!`);\r\n        },\r\n        name: makeRandomName()\r\n    });\r\n}\r\n\r\n","signature":"6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n"}],"root":[2,3,5],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../animals","strict":true,"target":1},"fileIdsList":[[3,4],[2,5],[3]],"referencedMap":[[5,1],[3,2]],"exportedModulesMap":[[5,3],[3,2]],"semanticDiagnosticsPerFile":[1,2,5,3,4],"latestChangedDtsFile":"./dog.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/animals/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../../animals/animal.ts",
      "../../animals/index.ts",
      "../core/utilities.d.ts",
      "../../animals/dog.ts"
    ],
    "fileNamesList": [
      [
        "../../animals/index.ts",
        "../core/utilities.d.ts"
      ],
      [
        "../../animals/animal.ts",
        "../../animals/dog.ts"
      ],
      [
        "../../animals/index.ts"
      ]
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../../animals/animal.ts": {
        "original": {
          "version": "-14984181202-export type Size = \"small\" | \"medium\" | \"large\";\r\nexport default interface Animal {\r\n    size: Size;\r\n}\r\n",
          "signature": "-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n"
        },
        "version": "-14984181202-export type Size = \"small\" | \"medium\" | \"large\";\r\nexport default interface Animal {\r\n    size: Size;\r\n}\r\n",
        "signature": "-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n"
      },
      "../../animals/index.ts": {
        "original": {
          "version": "-5382672599-import Animal from './animal';\r\n\r\nexport default Animal;\r\nimport { createDog, Dog } from './dog';\r\nexport { createDog, Dog };\r\n",
          "signature": "1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n"
        },
        "version": "-5382672599-import Animal from './animal';\r\n\r\nexport default Animal;\r\nimport { createDog, Dog } from './dog';\r\nexport { createDog, Dog };\r\n",
        "signature": "1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n"
      },
      "../core/utilities.d.ts": {
        "version": "-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n",
        "signature": "-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n"
      },
      "../../animals/dog.ts": {
        "original": {
          "version": "-10991948013-import Animal from '.';\r\nimport { makeRandomName } from '../core/utilities';\r\n\r\nexport interface Dog extends Animal {\r\n    woof(): void;\r\n    name: string;\r\n}\r\n\r\nexport function createDog(): Dog {\r\n    return ({\r\n        size: \"medium\",\r\n        woof: function(this: Dog) {\r\n            console.log(`${this.name} says \"Woof\"!`);\r\n        },\r\n        name: makeRandomName()\r\n    });\r\n}\r\n\r\n",
          "signature": "6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n"
        },
        "version": "-10991948013-import Animal from '.';\r\nimport { makeRandomName } from '../core/utilities';\r\n\r\nexport interface Dog extends Animal {\r\n    woof(): void;\r\n    name: string;\r\n}\r\n\r\nexport function createDog(): Dog {\r\n    return ({\r\n        size: \"medium\",\r\n        woof: function(this: Dog) {\r\n            console.log(`${this.name} says \"Woof\"!`);\r\n        },\r\n        name: makeRandomName()\r\n    });\r\n}\r\n\r\n",
        "signature": "6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n"
      }
    },
    "root": [
      [
        2,
        "../../animals/animal.ts"
      ],
      [
        3,
        "../../animals/index.ts"
      ],
      [
        5,
        "../../animals/dog.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "module": 1,
      "noFallthroughCasesInSwitch": true,
      "noImplicitReturns": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "outDir": "./",
      "rootDir": "../../animals",
      "strict": true,
      "target": 1
    },
    "referencedMap": {
      "../../animals/dog.ts": [
        "../../animals/index.ts",
        "../core/utilities.d.ts"
      ],
      "../../animals/index.ts": [
        "../../animals/animal.ts",
        "../../animals/dog.ts"
      ]
    },
    "exportedModulesMap": {
      "../../animals/dog.ts": [
        "../../animals/index.ts"
      ],
      "../../animals/index.ts": [
        "../../animals/animal.ts",
        "../../animals/dog.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../../animals/animal.ts",
      "../../animals/dog.ts",
      "../../animals/index.ts",
      "../core/utilities.d.ts"
    ],
    "latestChangedDtsFile": "./dog.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2454
}

//// [/src/lib/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","../../core/utilities.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"25274411612-\r\nexport function makeRandomName() {\r\n    return \"Bob!?! \";\r\n}\r\n\r\nexport function lastElementOf<T>(arr: T[]): T | undefined {\r\n    if (arr.length === 0) return undefined;\r\n    return arr[arr.length - 1];\r\n}\r\n\r\n","signature":"-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n"}],"root":[2],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../core","strict":true,"target":1},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./utilities.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../../core/utilities.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../../core/utilities.ts": {
        "original": {
          "version": "25274411612-\r\nexport function makeRandomName() {\r\n    return \"Bob!?! \";\r\n}\r\n\r\nexport function lastElementOf<T>(arr: T[]): T | undefined {\r\n    if (arr.length === 0) return undefined;\r\n    return arr[arr.length - 1];\r\n}\r\n\r\n",
          "signature": "-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n"
        },
        "version": "25274411612-\r\nexport function makeRandomName() {\r\n    return \"Bob!?! \";\r\n}\r\n\r\nexport function lastElementOf<T>(arr: T[]): T | undefined {\r\n    if (arr.length === 0) return undefined;\r\n    return arr[arr.length - 1];\r\n}\r\n\r\n",
        "signature": "-11345568166-export declare function makeRandomName(): string;\nexport declare function lastElementOf<T>(arr: T[]): T | undefined;\n"
      }
    },
    "root": [
      [
        2,
        "../../core/utilities.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "module": 1,
      "noFallthroughCasesInSwitch": true,
      "noImplicitReturns": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "outDir": "./",
      "rootDir": "../../core",
      "strict": true,
      "target": 1
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../../core/utilities.ts"
    ],
    "latestChangedDtsFile": "./utilities.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1361
}

//// [/src/lib/core/utilities.d.ts]
export declare function makeRandomName(): string;
export declare function lastElementOf<T>(arr: T[]): T | undefined;


//// [/src/lib/core/utilities.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastElementOf = exports.makeRandomName = void 0;
function makeRandomName() {
    return "Bob!?! ";
}
exports.makeRandomName = makeRandomName;
function lastElementOf(arr) {
    if (arr.length === 0)
        return undefined;
    return arr[arr.length - 1];
}
exports.lastElementOf = lastElementOf;


//// [/src/lib/zoo/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","../animals/animal.d.ts","../animals/dog.d.ts","../animals/index.d.ts","../../zoo/zoo.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n","6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n","1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",{"version":"8797123924-import { Dog, createDog } from '../animals/index';\r\n\r\nexport function createZoo(): Array<Dog> {\r\n    return [\r\n        createDog()\r\n    ];\r\n}\r\n\r\n","signature":"10305066551-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array<Dog>;\n"}],"root":[5],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../zoo","strict":true,"target":1},"fileIdsList":[[4],[2,3]],"referencedMap":[[3,1],[4,2],[5,1]],"exportedModulesMap":[[3,1],[4,2],[5,1]],"semanticDiagnosticsPerFile":[1,2,3,4,5],"latestChangedDtsFile":"./zoo.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/zoo/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../animals/animal.d.ts",
      "../animals/dog.d.ts",
      "../animals/index.d.ts",
      "../../zoo/zoo.ts"
    ],
    "fileNamesList": [
      [
        "../animals/index.d.ts"
      ],
      [
        "../animals/animal.d.ts",
        "../animals/dog.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../animals/animal.d.ts": {
        "version": "-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
        "signature": "-9289341318-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n"
      },
      "../animals/dog.d.ts": {
        "version": "6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
        "signature": "6032048049-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n"
      },
      "../animals/index.d.ts": {
        "version": "1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
        "signature": "1096904574-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n"
      },
      "../../zoo/zoo.ts": {
        "original": {
          "version": "8797123924-import { Dog, createDog } from '../animals/index';\r\n\r\nexport function createZoo(): Array<Dog> {\r\n    return [\r\n        createDog()\r\n    ];\r\n}\r\n\r\n",
          "signature": "10305066551-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array<Dog>;\n"
        },
        "version": "8797123924-import { Dog, createDog } from '../animals/index';\r\n\r\nexport function createZoo(): Array<Dog> {\r\n    return [\r\n        createDog()\r\n    ];\r\n}\r\n\r\n",
        "signature": "10305066551-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array<Dog>;\n"
      }
    },
    "root": [
      [
        5,
        "../../zoo/zoo.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "module": 1,
      "noFallthroughCasesInSwitch": true,
      "noImplicitReturns": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "outDir": "./",
      "rootDir": "../../zoo",
      "strict": true,
      "target": 1
    },
    "referencedMap": {
      "../animals/dog.d.ts": [
        "../animals/index.d.ts"
      ],
      "../animals/index.d.ts": [
        "../animals/animal.d.ts",
        "../animals/dog.d.ts"
      ],
      "../../zoo/zoo.ts": [
        "../animals/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../animals/dog.d.ts": [
        "../animals/index.d.ts"
      ],
      "../animals/index.d.ts": [
        "../animals/animal.d.ts",
        "../animals/dog.d.ts"
      ],
      "../../zoo/zoo.ts": [
        "../animals/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../animals/animal.d.ts",
      "../animals/dog.d.ts",
      "../animals/index.d.ts",
      "../../zoo/zoo.ts"
    ],
    "latestChangedDtsFile": "./zoo.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1810
}

//// [/src/lib/zoo/zoo.d.ts]
import { Dog } from '../animals/index';
export declare function createZoo(): Array<Dog>;


//// [/src/lib/zoo/zoo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createZoo = void 0;
var index_1 = require("../animals/index");
function createZoo() {
    return [
        (0, index_1.createDog)()
    ];
}
exports.createZoo = createZoo;


