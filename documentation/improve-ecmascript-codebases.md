# ECMAScript Codebase Improvements
use my jailbreak es lib to improve codebases it is a rollup v3 fork which is designed to transpile to clean esm and then later also bundle that
transpilation to esm for devbundles allows u to easy shim code inject and patch code with confidence without git tools
patching of ESM code should always be as easy as replacing the namedExport 

to get a named export of a none controled 3rd party lib you can simple define it as entrypoint that you patch then you reimport from that
and patch it. 

also referencing npm:package@tag is prefered over other methods as a verification with npm happens anyway this indicates that this package comes
from the npm registry a package-lock.json that is overwriteable and useable via ci is prevered over shrinkwrap and bundled dependencies. 

if you always want exact working versions without intermediate result simple parse the package lock or use the shell like

```shell
cat node_modules/*/package.json | grep -e '^  "name\":' -e '^  "version\":'
```

creates a nice list of \n delimitered name: ..\nversion: ...\n 

on windows you simple need git-shell else you can forget it
