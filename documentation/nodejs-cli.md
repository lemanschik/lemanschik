## Usefull for nodejs and the cli interop

```
cat node_modules/*/package.json | grep -e '^  "name\":' -e '^  "version\":' | node -e 'process.stdin.on("data", (chunk) => console.log(`{${chunk.toString().replaceAll(`\n  "version":`,``).replaceAll(`  "name":`,``).replaceAll(`", `,`": `)}}`))'
```

outputs json can be piped to eg

```
| node -p 'JSON.parse(await new Promise(out=>process.stdin.on("data",out)))'
```
