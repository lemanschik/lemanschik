config:
{
 "compilerOptions": {
  "allowJs": false
 }
}
Fs::
//// [c:/dev/a.d.ts]


//// [c:/dev/a.js]


//// [c:/dev/a.ts]


//// [c:/dev/b.d.ts]


//// [c:/dev/b.jsx]


//// [c:/dev/b.tsx]


//// [c:/dev/c.js]


//// [c:/dev/c.tsx]


//// [c:/dev/d.js]


//// [c:/dev/e.jsx]


//// [c:/dev/f.other]



configFileName:: c:/dev/tsconfig.json
Result
{
 "options": {
  "allowJs": false,
  "configFilePath": "c:/dev/tsconfig.json"
 },
 "fileNames": [
  "c:/dev/a.ts",
  "c:/dev/b.tsx",
  "c:/dev/c.tsx"
 ],
 "typeAcquisition": {
  "enable": false,
  "include": [],
  "exclude": []
 },
 "raw": {
  "compilerOptions": {
   "allowJs": false
  }
 },
 "wildcardDirectories": {
  "c:/dev": "WatchDirectoryFlags.Recursive"
 },
 "compileOnSave": false
}
Errors::

