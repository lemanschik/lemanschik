currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/packages/a/package.json]
{ "dependencies": { "b": "*" } }

//// [/packages/a/tsconfig.json]
{ "compilerOptions": { "composite": true }, "references": [{ "path": "./node_modules/b" }] }

//// [/packages/a/index.ts]


//// [/packages/a/node_modules/b/package.json]
{ "types": "dist/index.d.ts" }

//// [/packages/a/node_modules/b/tsconfig.json]
{ "compilerOptions": { "composite": true, "outDir": "dist" } }

//// [/packages/a/node_modules/b/index.ts]
export class B {}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/packages/a/index.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /packages/a
Info seq  [hh:mm:ss:mss] For info: /packages/a/index.ts :: Config file name: /packages/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/a/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/a/tsconfig.json 2000 undefined Project: /packages/a/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /packages/a/tsconfig.json : {
 "rootNames": [
  "/packages/a/index.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/packages/a/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/a/node_modules/b",
   "originalPath": "./node_modules/b"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/a 1 undefined Config: /packages/a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/a 1 undefined Config: /packages/a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/a/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /packages/a/node_modules/b/tsconfig.json : {
 "rootNames": [
  "/packages/a/node_modules/b/index.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/packages/a/node_modules/b/dist",
  "configFilePath": "/packages/a/node_modules/b/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/a/node_modules/b/tsconfig.json 2000 undefined Project: /packages/a/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/a/node_modules/b 1 undefined Config: /packages/a/node_modules/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/a/node_modules/b 1 undefined Config: /packages/a/node_modules/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /packages/a/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/packages/a/index.ts SVC-1-0 ""


	index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/a/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] AutoImportProviderProject: found 1 root files in 1 dependencies in * ms
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/autoImportProviderProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/a/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/a/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/autoImportProviderProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/packages/a/node_modules/b/index.ts Text-1 "export class B {}"


	node_modules/b/index.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Search path: /packages/a
Info seq  [hh:mm:ss:mss] For info: /packages/a/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/packages/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /packages/a/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/a/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/packages/a/node_modules/b/tsconfig.json: *new*
  {}
/packages/a/package.json: *new*
  {}
/packages/a/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/packages/a: *new*
  {}
/packages/a/node_modules: *new*
  {}
/packages/a/node_modules/b: *new*
  {}
