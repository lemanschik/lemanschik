config:
{
 "include": [
  "a.ts",
  "b.ts",
  "node_modules/a.ts",
  "bower_components/a.ts",
  "jspm_packages/a.ts"
 ],
 "exclude": [
  "a.ts",
  "b.ts"
 ]
}
Fs::
//// [c:/dev/a.d.ts]


//// [c:/dev/a.js]


//// [c:/dev/a.ts]


//// [c:/dev/b.ts]


//// [c:/dev/bower_components/a.ts]


//// [c:/dev/jspm_packages/a.ts]


//// [c:/dev/node_modules/a.ts]


//// [c:/dev/x/a.ts]



configFileName:: c:/dev/tsconfig.json
Result
{
 "options": {
  "configFilePath": "c:/dev/tsconfig.json"
 },
 "fileNames": [
  "c:/dev/node_modules/a.ts",
  "c:/dev/bower_components/a.ts",
  "c:/dev/jspm_packages/a.ts"
 ],
 "typeAcquisition": {
  "enable": false,
  "include": [],
  "exclude": []
 },
 "raw": {
  "include": [
   "a.ts",
   "b.ts",
   "node_modules/a.ts",
   "bower_components/a.ts",
   "jspm_packages/a.ts"
  ],
  "exclude": [
   "a.ts",
   "b.ts"
  ],
  "compileOnSave": false
 },
 "wildcardDirectories": {},
 "compileOnSave": false
}
Errors::

