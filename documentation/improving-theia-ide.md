# The history of theia IDE
The first versions got build via TypeScript Abstractions on the original interfaces
the later versions got improved in the mean time code-server was the only project that got a good working browser node companion build.

## Why is the NodeJS backend Browser Frontend Build so importent?
Its the one that can be used to produce real Applications via AwesomeOS Application Bundling / Google Chrome Isolated WEBAPP. 

## TODO
assets by path native/*.node 637 KiB
  asset native/nsfw.node 247 KiB [emitted] (auxiliary id hint: vendors) replace by node --watch and watch-dir flag
  asset native/keytar.node 111 KiB [emitted] (auxiliary id hint: vendors)
  A native Node module to get, add, replace, and delete passwords in system's keychain. On macOS the passwords are managed by the Keychain, on Linux they are managed by the Secret Service API/libsecret, and on Windows they are managed by Credential Vault.
  asset native/sshcrypto.node 90.2 KiB [emitted] (auxiliary id hint: vendors) the sshcrypto asset comes from package/remote maybe stripable fast. replace with webrtc
  
  asset native/cpufeatures.node 59.4 KiB [emitted] (auxiliary id hint: vendors)
  win:
me.ps1
Get-WmiObject Win32_Processor or gwmi win32_Processor
 linux:
 lscpu | grep syscall 
 macos:
 sysctl -a | grep cpu.feat
 machdep.cpu.features: FPU VME DE PSE TSC MSR PAE MCE CX8 APIC SEP MTRR PGE MCA CMOV PAT PSE36 CLFSH DS ACPI MMX FXSR SSE SSE2 SS HTT TM PBE SSE3 PCLMULQDQ DTES64 MON DSCPL VMX EST TM2 SSSE3 CX16 TPR PDCM SSE4.1 SSE4.2 x2APIC POPCNT AES PCID XSAVE OSXSAVE TSCTMR AVX1.0
 machdep.cpu.feature_bits: 2286390173542120447
 
 Alternatively (avoiding the grep and being a lot faster, which might help you run this often within a script)

  sysctl machdep.cpu.features
  sysctl machdep.cpu.features machdep.cpu.feature_bits
  Or just use: sysctl machdep.cpu to get them all
  
  asset native/pty.node 47.1 KiB [emitted] (auxiliary id hint: vendors) needs replacement by node/repl

