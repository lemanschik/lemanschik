currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/tsconfig.json]
{}

//// [/package.json]
{
  "dependencies": {
    "redux": "*"
  },
  "peerDependencies": {
    "react": "*"
  },
  "optionalDependencies": {
    "typescript": "*"
  },
  "devDependencies": {
    "webpack": "*"
  }
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/tsconfig.json"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /
Info seq  [hh:mm:ss:mss] For info: /tsconfig.json :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [],
 "options": {
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/tsconfig.json SVC-1-0 "{}"


	tsconfig.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}

TI:: [hh:mm:ss:mss] Global cache location '/a/data/', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/a/data/'
TI:: [hh:mm:ss:mss] Trying to find '/a/data/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/a/data/'
TI:: [hh:mm:ss:mss] Npm config file: /a/data/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/a/data/package.json' is missing, creating new one...
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a/data :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a/data :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a/data/package.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json Detected new package.json: a/data/package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/data/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project: /tsconfig.json Detected file add/remove of non supported extension: a/data/package.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a/data/package.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a/data/node_modules :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a/data/node_modules :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a/data/node_modules/types-registry :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a/data/node_modules/types-registry :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with a/data/node_modules/types-registry/index.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /tsconfig.json Detected file add/remove of non supported extension: a/data/node_modules/types-registry/index.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with a/data/node_modules/types-registry/index.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
TI:: [hh:mm:ss:mss] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
 "entries": {}
}


PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/a/data/package.json: *new*
  {}
/tsconfig.json:
  {}

FsWatchesRecursive::
/:
  {}

TI:: [hh:mm:ss:mss] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/tsconfig.json"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/","cachePath":"/a/data/","kind":"discover"}
TI:: [hh:mm:ss:mss] Request specifies cache path '/a/data/', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/a/data/'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Typing names in '/package.json' dependencies: ["redux","webpack","typescript","react"]
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Result: {"cachedTypingPaths":[],"newTypingNames":["redux","webpack","typescript","react"],"filesToWatch":["/bower_components","/package.json","/node_modules"]}
TI:: [hh:mm:ss:mss] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["redux","webpack","typescript","react"],"filesToWatch":["/bower_components","/package.json","/node_modules"]}
TI:: [hh:mm:ss:mss] Sending response:
    {"kind":"action::watchTypingLocations","projectName":"/dev/null/inferredProject1*","files":["/bower_components","/package.json","/node_modules"]}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /bower_components 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /bower_components 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Installing typings ["redux","webpack","typescript","react"]
TI:: [hh:mm:ss:mss] 'redux':: Entry for package 'redux' does not exist in local types registry - skipping...
TI:: [hh:mm:ss:mss] 'webpack':: Entry for package 'webpack' does not exist in local types registry - skipping...
TI:: [hh:mm:ss:mss] 'typescript':: Entry for package 'typescript' does not exist in local types registry - skipping...
TI:: [hh:mm:ss:mss] 'react':: Entry for package 'react' does not exist in local types registry - skipping...
TI:: [hh:mm:ss:mss] All typings are known to be missing or invalid - no need to install more typings
TI:: [hh:mm:ss:mss] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true},"typings":[],"unresolvedImports":[],"kind":"action::set"}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/bower_components: *new*
  {"pollingInterval":500}
/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/a/data/package.json:
  {}
/package.json: *new*
  {}
/tsconfig.json:
  {}

FsWatchesRecursive::
/:
  {}

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with src :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with src :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with src/package.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json Detected new package.json: src/package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project: /tsconfig.json Detected file add/remove of non supported extension: src/package.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with src/package.json :: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
packageJson
//// [/src/package.json]
{
  "dependencies": {
    "redux": "*"
  },
  "peerDependencies": {
    "react": "*"
  },
  "optionalDependencies": {
    "typescript": "*"
  },
  "devDependencies": {
    "webpack": "*"
  }
}


PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/bower_components:
  {"pollingInterval":500}
/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/data/package.json:
  {}
/package.json:
  {}
/src/package.json: *new*
  {}
/tsconfig.json:
  {}

FsWatchesRecursive::
/:
  {}
