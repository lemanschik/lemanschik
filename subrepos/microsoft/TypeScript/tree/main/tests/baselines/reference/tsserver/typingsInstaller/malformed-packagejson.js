currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/a/b/app.js]
var x = 1

//// [/a/b/package.json]
{ "dependencies": { "co } }


Info seq  [hh:mm:ss:mss] Search path: /a/b
Info seq  [hh:mm:ss:mss] For info: /a/b/app.js :: No config files found.
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/b/app.js SVC-1-0 "var x = 1"


	app.js
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

TI:: [hh:mm:ss:mss] Global cache location '/a/cache/', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/a/cache/'
TI:: [hh:mm:ss:mss] Trying to find '/a/cache/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/a/cache/'
TI:: [hh:mm:ss:mss] Npm config file: /a/cache/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/a/cache/package.json' is missing, creating new one...
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
TI:: [hh:mm:ss:mss] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/cache/package.json]
{ "private": true }

//// [/a/cache/node_modules/types-registry/index.json]
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
  }
 }
}


TI:: [hh:mm:ss:mss] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/b/app.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/a/b","cachePath":"/a/cache/","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/cache/', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/cache/'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Typing names in '/a/b/package.json' dependencies: ["co } }"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":[],"newTypingNames":["co } }"],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["co } }"],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/dev/null/inferredProject1*","files":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b/bower_components 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/bower_components 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Installing typings ["co } }"]
TI:: [hh:mm:ss:mss] 'co } }':: Package name 'co } }' contains non URI safe characters
TI:: [hh:mm:ss:mss] All typings are known to be missing or invalid - no need to install more typings
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /a/b/package.json 1:: WatchInfo: /a/b/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location for typing installer
TI:: [hh:mm:ss:mss] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/b/app.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/a/b","cachePath":"/a/cache/","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/cache/', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/cache/'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Typing names in '/a/b/package.json' dependencies: ["commander"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":[],"newTypingNames":["commander"],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["commander"],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/dev/null/inferredProject1*"}
TI:: [hh:mm:ss:mss] Installing typings ["commander"]
TI:: [hh:mm:ss:mss] Npm config file: /a/cache/package.json
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::beginInstallTypes","eventId":1,"typingsInstallerVersion":"FakeVersion","projectName":"/dev/null/inferredProject1*"}
TI:: [hh:mm:ss:mss] #1 with arguments'["@types/commander@tsFakeMajor.Minor"]'.
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /a/b/package.json 1:: WatchInfo: /a/b/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location for typing installer
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /a/b/package.json 1:: WatchInfo: /a/b/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /a/b/package.json 1:: WatchInfo: /a/b/package.json 250 undefined WatchType: package.json file
Timeout callback:: count: 0
Immedidate callback:: count: 0
//// [/a/b/package.json]
{ "dependencies": { "commander": "0.0.2" } }


PolledWatches::
/a/b/bower_components: *new*
  {"pollingInterval":500}
/a/b/node_modules: *new*
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/a/b/package.json: *new*
  {}

TI:: [hh:mm:ss:mss] #1 with arguments'["@types/commander@tsFakeMajor.Minor"]':: true
TI:: Before installWorker

TI:: After installWorker
//// [/a/cache/node_modules/@types/commander/index.d.ts]
export let x: number


TI:: [hh:mm:ss:mss] Installed typings ["@types/commander@tsFakeMajor.Minor"]
TI:: [hh:mm:ss:mss] Installed typing files ["/a/cache/node_modules/@types/commander/index.d.ts"]
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":["/a/cache/node_modules/@types/commander/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"event::endInstallTypes","eventId":1,"projectName":"/dev/null/inferredProject1*","packagesToInstall":["@types/commander@tsFakeMajor.Minor"],"installSuccess":true,"typingsInstallerVersion":"FakeVersion"}
Before running Timeout callback:: count: 2
1: /dev/null/inferredProject1*
2: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/b/app.js SVC-1-0 "var x = 1"
	/a/cache/node_modules/@types/commander/index.d.ts Text-1 "export let x: number"


	app.js
	  Root file specified for compilation
	../cache/node_modules/@types/commander/index.d.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: [hh:mm:ss:mss] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/b/app.js","/a/cache/node_modules/@types/commander/index.d.ts"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/a/b","cachePath":"/a/cache/","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/cache/', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/cache/'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Typing names in '/a/b/package.json' dependencies: ["commander"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":["/a/cache/node_modules/@types/commander/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":["/a/cache/node_modules/@types/commander/index.d.ts"],"newTypingNames":[],"filesToWatch":["/a/b/bower_components","/a/b/package.json","/a/b/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/dev/null/inferredProject1*"}
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":["/a/cache/node_modules/@types/commander/index.d.ts"],"unresolvedImports":[],"kind":"action::set"}
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After running Timeout callback:: count: 0
