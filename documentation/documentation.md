<pre>
<!-- The above code lets us directly render this /documentation/documentation.md as text markd ingnores this on github -->

# Development Patterns 
This aims to give you a grasp of Well Executed Code Maintainance at scale.

## Rules of Awesomeness
To create something awesome you need to understand the concepts of managed references. Managed References is a relatively abstract term
you can think about it like UUIDs sometimes with a schema for the key times not. 

Cargo and NPM as also Git all this Package management and Build tools have overlapping functionality.

But all follow the same concepts of managed references so the smallest denominator is Text input parsed and interpreted so resolved references. 

So the result is always a Graph Object. Containing Instructions as also Files. 

ECMAScript is a Text based Language definition Implemented on top of JSON itself which is Implemented on top of UTF-16
There is an additional Charakter set defined in the spec which is not needed as it is overlapping with UTF-16 they are 
exchange able but UTF-16 makes everything more simple and stable. 

SO an ECMAScript Runtime Implements JSON + Logic via Functions. All Together Compiled to nativ code at last when you use V8

To Extend V8 It self Torque Lang and or C++ can be used. Most best is to Simple Create a JS Value Handle via c++ Template functions.

As Many Coders are not familiar with such stuff or C++ itself it is Easy to use something like Stealify Lang to create such 
Template Function Wrappers for C Libs then simply reference and load that result as ASM Pointer with v8 as bultIn. 

This process is not as complex as it looks like as it follows highly Generic Patterns. We do in general the most expensive step manual!
The so-called Linking. Compiling the code itself is most time the less expensive part of creating a binary compilation. The Linking is
more expensive. This gives us Incremental Builds and Dynamic Fast Call and Load able Code. 

The same results can be archived via WASM depending on the Releam/Context. It depends largely on the factor of IO Generation.
for example, when IO gets generated from a Device depending on the overall processing the context could be Outside of the runtime/userland
so in let us say the Kernel. 

In Large Applications, the Code execution is not the problem the bottleneck is most time the IO Boundary so efficient IO Structures
do exponential speed up any code no matter what kind of.
