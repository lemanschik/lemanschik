currentDirectory:: / useCaseSensitiveFileNames: false
Creating project service
//// [/a/b/lodash.js]


//// [/a/b/commander.js]


//// [/a/b/file3.d.ts]


//// [/typesMap.json]
{
            "typesMap": {
                "jquery": {
                    "match": "jquery(-(\\.?\\d+)+)?(\\.intellisense)?(\\.min)?\\.js$",
                    "types": ["jquery"]
                },
                "quack": {
                    "match": "/duckquack-(\\d+)\\.min\\.js",
                    "types": ["duck-types"]
                }
            },
            "simpleMap": {
                "Bacon": "baconjs",
                "bliss": "blissfuljs",
                "commander": "commander",
                "cordova": "cordova",
                "react": "react",
                "lodash": "lodash"
            }
        }


Info seq  [hh:mm:ss:mss] Excluded '/a/b/lodash.js' because it matched lodash from the legacy safelist
Info seq  [hh:mm:ss:mss] Excluded '/a/b/commander.js' because it matched commander from the legacy safelist
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/file3.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/app/test1.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/app/test1.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/app/test1.csproj Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/app/test1.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/b/file3.d.ts Text-1 ""


	../b/file3.d.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a/b/file3.d.ts: *new*
  {}

TI:: [hh:mm:ss:mss] Global cache location '/a/data', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Trying to find '/a/data/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Npm config file: /a/data/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/a/data/package.json' is missing, creating new one...
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
TI:: [hh:mm:ss:mss] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
 "entries": {
  "commander": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  },
  "jquery": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  },
  "lodash": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  },
  "cordova": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  },
  "gulp": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  },
  "grunt": {
   "latest": "1.3.0",
   "ts2.0": "1.0.0",
   "ts2.1": "1.0.0",
   "ts2.2": "1.2.0",
   "ts2.3": "1.3.0",
   "ts2.4": "1.3.0",
   "ts2.5": "1.3.0",
   "ts2.6": "1.3.0",
   "ts2.7": "1.3.0"
  }
 }
}


TI:: [hh:mm:ss:mss] Got install request {"projectName":"/a/app/test1.csproj","fileNames":["/a/b/file3.d.ts","/a/b/lodash.js","/a/b/commander.js"],"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typeAcquisition":{"include":["jquery","cordova","lodash","commander"],"exclude":[],"enable":true},"unresolvedImports":[],"projectRootPath":"/a/app","cachePath":"/a/data","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/data', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Loaded safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: ["jquery","cordova","lodash","commander"]
TI:: [hh:mm:ss:mss] Inferred typings from file names: ["lodash","commander"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":[],"newTypingNames":["jquery","cordova","lodash","commander"],"filesToWatch":["/a/b/bower_components","/a/b/node_modules","/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["jquery","cordova","lodash","commander"],"filesToWatch":["/a/b/bower_components","/a/b/node_modules","/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/a/app/test1.csproj","files":["/a/b/bower_components","/a/b/node_modules","/a/app/bower_components","/a/app/node_modules"]}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b/bower_components 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/bower_components 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/app/bower_components 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/app/bower_components 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/app/node_modules 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/app/node_modules 1 undefined Project: /a/app/test1.csproj WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Installing typings ["jquery","cordova","lodash","commander"]
TI:: [hh:mm:ss:mss] Npm config file: /a/data/package.json
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::beginInstallTypes","eventId":1,"typingsInstallerVersion":"FakeVersion","projectName":"/a/app/test1.csproj"}
TI:: [hh:mm:ss:mss] #1 with arguments'["@types/jquery@tsFakeMajor.Minor","@types/cordova@tsFakeMajor.Minor","@types/lodash@tsFakeMajor.Minor","@types/commander@tsFakeMajor.Minor"]'.
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/app/test2.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/app/test2.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/app/test2.csproj Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/app/test2.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/b/file3.d.ts Text-1 ""


	../b/file3.d.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: [hh:mm:ss:mss] Got install request {"projectName":"/a/app/test2.csproj","fileNames":["/a/b/file3.d.ts"],"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typeAcquisition":{"include":["grunt","gulp"],"exclude":[],"enable":true},"unresolvedImports":[],"projectRootPath":"/a/app","cachePath":"/a/data","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/data', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Explicitly included types: ["grunt","gulp"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":[],"newTypingNames":["grunt","gulp"],"filesToWatch":["/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["grunt","gulp"],"filesToWatch":["/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/a/app/test2.csproj","files":["/a/app/bower_components","/a/app/node_modules"]}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/app/bower_components 1 undefined Project: /a/app/test2.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/app/bower_components 1 undefined Project: /a/app/test2.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/app/node_modules 1 undefined Project: /a/app/test2.csproj WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/app/node_modules 1 undefined Project: /a/app/test2.csproj WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Installing typings ["grunt","gulp"]
TI:: [hh:mm:ss:mss] Npm config file: /a/data/package.json
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::beginInstallTypes","eventId":2,"typingsInstallerVersion":"FakeVersion","projectName":"/a/app/test2.csproj"}
TI:: [hh:mm:ss:mss] #1 with arguments'["@types/jquery@tsFakeMajor.Minor","@types/cordova@tsFakeMajor.Minor","@types/lodash@tsFakeMajor.Minor","@types/commander@tsFakeMajor.Minor"]':: true
TI:: Before installWorker

PolledWatches::
/a/app/bower_components: *new*
  {"pollingInterval":500}
/a/app/node_modules: *new*
  {"pollingInterval":500}
/a/b/bower_components: *new*
  {"pollingInterval":500}
/a/b/node_modules: *new*
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/a/b/file3.d.ts:
  {}

TI:: After installWorker
//// [/a/data/node_modules/@types/commander/index.d.ts]
declare const commander: { x: number }

//// [/a/data/node_modules/@types/jquery/index.d.ts]
declare const jquery: { x: number }

//// [/a/data/node_modules/@types/lodash/index.d.ts]
declare const lodash: { x: number }

//// [/a/data/node_modules/@types/cordova/index.d.ts]
declare const cordova: { x: number }


TI:: [hh:mm:ss:mss] Installed typings ["@types/jquery@tsFakeMajor.Minor","@types/cordova@tsFakeMajor.Minor","@types/lodash@tsFakeMajor.Minor","@types/commander@tsFakeMajor.Minor"]
TI:: [hh:mm:ss:mss] Installed typing files ["/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/data/node_modules/@types/commander/index.d.ts"]
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/a/app/test1.csproj","typeAcquisition":{"include":["jquery","cordova","lodash","commander"],"exclude":[],"enable":true},"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typings":["/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/data/node_modules/@types/commander/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
Info seq  [hh:mm:ss:mss] Scheduled: /a/app/test1.csproj
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::endInstallTypes","eventId":1,"projectName":"/a/app/test1.csproj","packagesToInstall":["@types/jquery@tsFakeMajor.Minor","@types/cordova@tsFakeMajor.Minor","@types/lodash@tsFakeMajor.Minor","@types/commander@tsFakeMajor.Minor"],"installSuccess":true,"typingsInstallerVersion":"FakeVersion"}
TI:: [hh:mm:ss:mss] #2 with arguments'["@types/grunt@tsFakeMajor.Minor","@types/gulp@tsFakeMajor.Minor"]'.
TI:: [hh:mm:ss:mss] #2 with arguments'["@types/grunt@tsFakeMajor.Minor","@types/gulp@tsFakeMajor.Minor"]':: true
TI:: Before installWorker

TI:: After installWorker
//// [/a/data/node_modules/@types/grunt/index.d.ts]
declare const grunt: { x: number }

//// [/a/data/node_modules/@types/gulp/index.d.ts]
declare const gulp: { x: number }


TI:: [hh:mm:ss:mss] Installed typings ["@types/grunt@tsFakeMajor.Minor","@types/gulp@tsFakeMajor.Minor"]
TI:: [hh:mm:ss:mss] Installed typing files ["/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"]
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/a/app/test2.csproj","typeAcquisition":{"include":["grunt","gulp"],"exclude":[],"enable":true},"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typings":["/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
Info seq  [hh:mm:ss:mss] Scheduled: /a/app/test2.csproj
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::endInstallTypes","eventId":2,"projectName":"/a/app/test2.csproj","packagesToInstall":["@types/grunt@tsFakeMajor.Minor","@types/gulp@tsFakeMajor.Minor"],"installSuccess":true,"typingsInstallerVersion":"FakeVersion"}
Before running Timeout callback:: count: 2
1: /a/app/test1.csproj
2: /a/app/test2.csproj

Info seq  [hh:mm:ss:mss] Running: /a/app/test1.csproj
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/app/test1.csproj
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/app/test1.csproj Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/app/test1.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/a/b/file3.d.ts Text-1 ""
	/a/data/node_modules/@types/commander/index.d.ts Text-1 "declare const commander: { x: number }"
	/a/data/node_modules/@types/cordova/index.d.ts Text-1 "declare const cordova: { x: number }"
	/a/data/node_modules/@types/jquery/index.d.ts Text-1 "declare const jquery: { x: number }"
	/a/data/node_modules/@types/lodash/index.d.ts Text-1 "declare const lodash: { x: number }"


	../b/file3.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/commander/index.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/cordova/index.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/jquery/index.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/lodash/index.d.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: [hh:mm:ss:mss] Got install request {"projectName":"/a/app/test1.csproj","fileNames":["/a/b/file3.d.ts","/a/data/node_modules/@types/commander/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/b/lodash.js","/a/b/commander.js"],"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typeAcquisition":{"include":["jquery","cordova","lodash","commander"],"exclude":[],"enable":true},"unresolvedImports":[],"projectRootPath":"/a/app","cachePath":"/a/data","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/data', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Explicitly included types: ["jquery","cordova","lodash","commander"]
TI:: [hh:mm:ss:mss] Inferred typings from file names: ["lodash","commander"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":["/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/data/node_modules/@types/commander/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/b/bower_components","/a/b/node_modules","/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":["/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/data/node_modules/@types/commander/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/b/bower_components","/a/b/node_modules","/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/a/app/test1.csproj"}
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/a/app/test1.csproj","typeAcquisition":{"include":["jquery","cordova","lodash","commander"],"exclude":[],"enable":true},"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typings":["/a/data/node_modules/@types/jquery/index.d.ts","/a/data/node_modules/@types/cordova/index.d.ts","/a/data/node_modules/@types/lodash/index.d.ts","/a/data/node_modules/@types/commander/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] Running: /a/app/test2.csproj
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/app/test2.csproj
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/app/test2.csproj Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/app/test2.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/b/file3.d.ts Text-1 ""
	/a/data/node_modules/@types/grunt/index.d.ts Text-1 "declare const grunt: { x: number }"
	/a/data/node_modules/@types/gulp/index.d.ts Text-1 "declare const gulp: { x: number }"


	../b/file3.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/grunt/index.d.ts
	  Root file specified for compilation
	../data/node_modules/@types/gulp/index.d.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: [hh:mm:ss:mss] Got install request {"projectName":"/a/app/test2.csproj","fileNames":["/a/b/file3.d.ts","/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"],"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typeAcquisition":{"include":["grunt","gulp"],"exclude":[],"enable":true},"unresolvedImports":[],"projectRootPath":"/a/app","cachePath":"/a/data","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/data', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/data'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Explicitly included types: ["grunt","gulp"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":["/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":["/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/app/bower_components","/a/app/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/a/app/test2.csproj"}
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/a/app/test2.csproj","typeAcquisition":{"include":["grunt","gulp"],"exclude":[],"enable":true},"compilerOptions":{"allowJS":true,"moduleResolution":2,"allowNonTsExtensions":true,"noEmitForJsFiles":true},"typings":["/a/data/node_modules/@types/grunt/index.d.ts","/a/data/node_modules/@types/gulp/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
After running Timeout callback:: count: 0
