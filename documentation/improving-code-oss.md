# Code-OSS / VSCODE
The main Problem of it are the native modules and the electron api most of that got addressed partial by theia and code-server.

The Real Solution Would be a Clean ESM Build this is possible for monaco-editor already. 

refactoring the current code-oss codebase to integrate a browser build via vscode-web-playground or vscode-web-opfs would be cool.

also replace incremental the monaco-editor build used in the vscode build process and fix the build process it self to not depend on 

```
(MIRROR=https://nodejs.org/dist/latest; VERSION=; DIR=/usr/local; SYSTEM=linux-x64; curl -s -L ${MIRROR}${VERSION}/$(curl -s -L ${MIRROR}${VERSION} | grep 'tar.gz' | grep ${SYSTEM} | cut -d\" -f2) | tar -xvz --strip-components 1 -C ${DIR})
git clone https://github.com/microsoft/vscode
cd vscode
sed  -i '/npm_execpath/c\if (!process.env["npm_config_user_agent"].startsWith("yarn")) {' build/npm/preinstall.js
apt-get install -y libxkbfile-dev pkg-config libsecret-1-dev libkrb5-dev libxss1 dbus libgtk-3-0 libgbm1 
npx -p node@18.15 -p yarn -p node-gyp yarn
npx -p node@18.15 -p yarn -p node-gyp -p gulp yarn gulp vscode-web-min
```


## WebRTC Backends
opfs sync as extension for the current file system or open editor files

## Make OPFS layer the default Layer
The OPFS alows us to open system folders on chromium and isolate them this way. As also virtual mount and so on.


