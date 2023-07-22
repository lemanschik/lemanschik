import * as fakes from "../../_namespaces/fakes";
import * as Harness from "../../_namespaces/Harness";
import * as ts from "../../_namespaces/ts";
import * as vfs from "../../_namespaces/vfs";
import { baselineParseConfig, baselineParseConfigHost } from "./helpers";

function createFileSystem(ignoreCase: boolean, cwd: string, root: string) {
    return new vfs.FileSystem(ignoreCase, {
        cwd,
        files: {
            [root]: {
                "dev/node_modules/@foo/tsconfig/package.json": JSON.stringify({
                    name: "@foo/tsconfig",
                    version: "1.0.0",
                    exports: {
                        ".": "./src/tsconfig.json"
                    }
                }),
                "dev/node_modules/@foo/tsconfig/src/tsconfig.json": JSON.stringify({
                    compilerOptions: {
                        strict: true,
                    }
                }),
                "dev/tsconfig.extendsFoo.json": JSON.stringify({
                    extends: "@foo/tsconfig",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/node_modules/config-box/package.json": JSON.stringify({
                    name: "config-box",
                    version: "1.0.0",
                    tsconfig: "./strict.json"
                }),
                "dev/node_modules/config-box/strict.json": JSON.stringify({
                    compilerOptions: {
                        strict: true,
                    }
                }),
                "dev/node_modules/config-box/unstrict.json": JSON.stringify({
                    compilerOptions: {
                        strict: false,
                    }
                }),
                "dev/tsconfig.extendsBox.json": JSON.stringify({
                    extends: "config-box",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsStrict.json": JSON.stringify({
                    extends: "config-box/strict",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsUnStrict.json": JSON.stringify({
                    extends: "config-box/unstrict",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsStrictExtension.json": JSON.stringify({
                    extends: "config-box/strict.json",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/node_modules/config-box-implied/package.json": JSON.stringify({
                    name: "config-box-implied",
                    version: "1.0.0",
                }),
                "dev/node_modules/config-box-implied/tsconfig.json": JSON.stringify({
                    compilerOptions: {
                        strict: true,
                    }
                }),
                "dev/node_modules/config-box-implied/unstrict/tsconfig.json": JSON.stringify({
                    compilerOptions: {
                        strict: false,
                    }
                }),
                "dev/tsconfig.extendsBoxImplied.json": JSON.stringify({
                    extends: "config-box-implied",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsBoxImpliedUnstrict.json": JSON.stringify({
                    extends: "config-box-implied/unstrict",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsBoxImpliedUnstrictExtension.json": JSON.stringify({
                    extends: "config-box-implied/unstrict/tsconfig",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.extendsBoxImpliedPath.json": JSON.stringify({
                    extends: "config-box-implied/tsconfig.json",
                    files: [
                        "main.ts",
                    ]
                }),
                "dev/tsconfig.json": JSON.stringify({
                    extends: "./configs/base",
                    files: [
                        "main.ts",
                        "supplemental.ts"
                    ]
                }),
                "dev/tsconfig.nostrictnull.json": JSON.stringify({
                    extends: "./tsconfig",
                    compilerOptions: {
                        strictNullChecks: false
                    }
                }),
                "dev/configs/base.json": JSON.stringify({
                    compilerOptions: {
                        allowJs: true,
                        noImplicitAny: true,
                        strictNullChecks: true
                    }
                }),
                "dev/configs/tests.json": JSON.stringify({
                    compilerOptions: {
                        preserveConstEnums: true,
                        removeComments: false,
                        sourceMap: true
                    },
                    exclude: [
                        "../tests/baselines",
                        "../tests/scenarios"
                    ],
                    include: [
                        "../tests/**/*.ts"
                    ]
                }),
                "dev/circular.json": JSON.stringify({
                    extends: "./circular2",
                    compilerOptions: {
                        module: "amd"
                    }
                }),
                "dev/circular2.json": JSON.stringify({
                    extends: "./circular",
                    compilerOptions: {
                        module: "commonjs"
                    }
                }),
                "dev/missing.json": JSON.stringify({
                    extends: "./missing2",
                    compilerOptions: {
                        types: []
                    }
                }),
                "dev/failure.json": JSON.stringify({
                    extends: "./failure2.json",
                    compilerOptions: {
                        typeRoots: []
                    }
                }),
                "dev/failure2.json": JSON.stringify({
                    excludes: ["*.js"]
                }),
                "dev/configs/first.json": JSON.stringify({
                    extends: "./base",
                    compilerOptions: {
                        module: "commonjs"
                    },
                    files: ["../main.ts"]
                }),
                "dev/configs/second.json": JSON.stringify({
                    extends: "./base",
                    compilerOptions: {
                        module: "amd"
                    },
                    include: ["../supplemental.*"]
                }),
                "dev/configs/third.json": JSON.stringify({
                    extends: "./second",
                    compilerOptions: {
                        module: null // eslint-disable-line no-null/no-null
                    },
                    include: ["../supplemental.*"]
                }),
                "dev/configs/fourth.json": JSON.stringify({
                    extends: "./third",
                    compilerOptions: {
                        module: "system"
                    },
                    include: null, // eslint-disable-line no-null/no-null
                    files: ["../main.ts"]
                }),
                "dev/configs/fifth.json": JSON.stringify({
                    extends: "./fourth",
                    include: ["../tests/utils.ts"],
                    files: []
                }),
                "dev/extends.json": JSON.stringify({ extends: 42 }),
                "dev/extends2.json": JSON.stringify({ extends: "configs/base" }),
                "dev/extends3.json": JSON.stringify({ extends: "" }),
                "dev/extends4.json": JSON.stringify({ extends: [""] }),
                "dev/main.ts": "",
                "dev/supplemental.ts": "",
                "dev/tests/unit/spec.ts": "",
                "dev/tests/utils.ts": "",
                "dev/tests/scenarios/first.json": "",
                "dev/tests/baselines/first/output.ts": "",
                "dev/configs/extendsArrayFirst.json": JSON.stringify({
                    compilerOptions: {
                        allowJs: true,
                        noImplicitAny: true,
                        strictNullChecks: true
                    }
                }),
                "dev/configs/extendsArraySecond.json": JSON.stringify({
                    compilerOptions: {
                        module: "amd"
                    },
                    include: ["../supplemental.*"]
                }),
                "dev/configs/extendsArrayThird.json": JSON.stringify({
                    compilerOptions: {
                        module: null, // eslint-disable-line no-null/no-null
                        noImplicitAny: false
                    },
                    extends: "./extendsArrayFirst",
                    include: ["../supplemental.*"]
                }),
                "dev/configs/extendsArrayFourth.json": JSON.stringify({
                    compilerOptions: {
                        module: "system",
                        strictNullChecks: false
                    },
                    include: null, // eslint-disable-line no-null/no-null
                    files: ["../main.ts"]
                }),
                "dev/configs/extendsArrayFifth.json": JSON.stringify({
                    extends: ["./extendsArrayFirst", "./extendsArraySecond", "./extendsArrayThird", "./extendsArrayFourth"],
                    files: [],
                }),
                "dev/extendsArrayFails.json": JSON.stringify({
                    extends: ["./missingFile"],
                    compilerOptions: {
                        types: []
                    }
                }),
                "dev/extendsArrayFails2.json": JSON.stringify({ extends: [42] }),
            }
        }
    });
}

const caseInsensitiveBasePath = "c:/dev/";
const caseInsensitiveHost = new fakes.ParseConfigHost(createFileSystem(/*ignoreCase*/ true, caseInsensitiveBasePath, "c:/"));

const caseSensitiveBasePath = "/dev/";
const caseSensitiveHost = new fakes.ParseConfigHost(createFileSystem(/*ignoreCase*/ false, caseSensitiveBasePath, "/"));

describe("unittests:: config:: configurationExtension", () => {
    ts.forEach<[string, string, fakes.ParseConfigHost], void>([
        ["under a case insensitive host", caseInsensitiveBasePath, caseInsensitiveHost],
        ["under a case sensitive host", caseSensitiveBasePath, caseSensitiveHost]
    ], ([testName, basePath, host]) => {
        const nameAndEntry: [name: string, entry: string][] = [];
        function baselineParsedCommandLine(name: string, entry: string) {
            nameAndEntry.push([name, entry]);
        }

        baselineParsedCommandLine("can resolve an extension with a base extension", "tsconfig.json");
        baselineParsedCommandLine("can resolve an extension with a base extension that overrides options", "tsconfig.nostrictnull.json");
        baselineParsedCommandLine("can report errors on circular imports", "circular.json");
        baselineParsedCommandLine("can report missing configurations", "missing.json");
        baselineParsedCommandLine("can report errors in extended configs", "failure.json");
        baselineParsedCommandLine("can error when 'extends' is not a string or Array", "extends.json");
        baselineParsedCommandLine("can error when 'extends' is given an empty string", "extends3.json");
        baselineParsedCommandLine("can error when 'extends' is given an empty string in an array", "extends4.json");
        baselineParsedCommandLine("can overwrite compiler options using extended 'null'", "configs/third.json");
        baselineParsedCommandLine("can overwrite top-level options using extended 'null'", "configs/fourth.json");
        baselineParsedCommandLine("can overwrite top-level files using extended []", "configs/fifth.json");
        baselineParsedCommandLine("can lookup via tsconfig field", "tsconfig.extendsBox.json");
        baselineParsedCommandLine("can lookup via package-relative path", "tsconfig.extendsStrict.json");
        baselineParsedCommandLine("can lookup via non-redirected-to package-relative path", "tsconfig.extendsUnStrict.json");
        baselineParsedCommandLine("can lookup via package-relative path with extension", "tsconfig.extendsStrictExtension.json");
        baselineParsedCommandLine("can lookup via an implicit tsconfig", "tsconfig.extendsBoxImplied.json");
        baselineParsedCommandLine("can lookup via an implicit tsconfig in a package-relative directory", "tsconfig.extendsBoxImpliedUnstrict.json");
        baselineParsedCommandLine("can lookup via an implicit tsconfig in a package-relative directory with name", "tsconfig.extendsBoxImpliedUnstrictExtension.json");
        baselineParsedCommandLine("can lookup via an implicit tsconfig in a package-relative directory with extension", "tsconfig.extendsBoxImpliedPath.json");
        baselineParsedCommandLine("can lookup via an package.json exports", "tsconfig.extendsFoo.json");

        baselineExtendsSourceFile("adds extendedSourceFiles only once", "configs/fourth.json");
        baselineExtendsSourceFile("adds extendedSourceFiles from an array only once", "configs/extendsArrayFifth.json");

        baselineParsedCommandLine("can overwrite top-level compilerOptions", "configs/extendsArrayFifth.json");
        baselineParsedCommandLine("can report missing configurations", "extendsArrayFails.json");
        baselineParsedCommandLine("can error when 'extends' is not a string or Array2", "extendsArrayFails2.json");

        baselineParseConfig({
            scenario: "configurationExtension",
            subScenario: testName,
            input: () => nameAndEntry.map(([name, entry]) => ({
                createHost: baseline => {
                    baseline.push(name);
                    return host;
                },
                jsonText: host.readFile(entry)!,
                configFileName: entry,
                baselineParsed: (baseline, parsed) => {
                    baseline.push("CompilerOptions::");
                    baseline.push(JSON.stringify(parsed.options, undefined, " "));
                    baseline.push("FileNames::");
                    baseline.push(parsed.fileNames.join());
                },
            })),
            skipFs: true,
            header: baseline => baselineParseConfigHost(baseline, host),
        });

        function baselineExtendsSourceFile(name: string, entry: string) {
            it(name, () => {
                const baseline: string[] = [];
                baselineParseConfigHost(baseline, host);
                baseline.push(`configFileName:: ${name}`);
                const sourceFile = ts.readJsonConfigFile(entry, (path) => host.readFile(path));
                const dir = ts.combinePaths(basePath, "configs");
                ts.parseJsonSourceFileConfigFileContent(sourceFile, host, dir, {}, ts.getBaseFileName(entry));
                baseline.push("ExtendedSourceFiles::", ...sourceFile.extendedSourceFiles!);
                ts.parseJsonSourceFileConfigFileContent(sourceFile, host, dir, {}, ts.getBaseFileName(entry));
                baseline.push("After reusing sourceFile ExtendedSourceFiles::", ...sourceFile.extendedSourceFiles!);
                Harness.Baseline.runBaseline(`config/configurationExtension/${name} ${testName}.js`, baseline.join("\n"));
            });
        }
    });
});
