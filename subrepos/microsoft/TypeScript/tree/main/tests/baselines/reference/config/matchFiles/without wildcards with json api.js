config:
{
 "include": [
  "x/.y/a.ts",
  "c:/dev/.z/.b.ts"
 ]
}
Fs::
//// [c:/dev/.z/.b.ts]


//// [c:/dev/.z/c.ts]


//// [c:/dev/g.min.js/.g/g.ts]


//// [c:/dev/w/.u/e.ts]


//// [c:/dev/x/.y/a.ts]


//// [c:/dev/x/d.ts]


//// [c:/dev/x/y/.e.ts]


//// [c:/dev/x/y/d.ts]



configFileName:: c:/dev/tsconfig.json
Result
{
 "options": {
  "configFilePath": "c:/dev/tsconfig.json"
 },
 "fileNames": [
  "c:/dev/x/.y/a.ts",
  "c:/dev/.z/.b.ts"
 ],
 "typeAcquisition": {
  "enable": false,
  "include": [],
  "exclude": []
 },
 "raw": {
  "include": [
   "x/.y/a.ts",
   "c:/dev/.z/.b.ts"
  ],
  "compileOnSave": false
 },
 "wildcardDirectories": {},
 "compileOnSave": false
}
Errors::

