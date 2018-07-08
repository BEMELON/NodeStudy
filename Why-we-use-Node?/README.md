# What is node?  
Node.js is a JavaScript runtime built on `Chrome's V8 JavaScript engine.`
  
## Chrome's JavaScript engine?  
- V8 Javascript engine is developed by google to be used with google-chrome.  
- It compiles the javascript code to native machine code instead of interpreting bytecode.  
- It is open source and written in C++.  

# Why we need to use Node?  
- Node uses `Non-Blocking System.`  
- Node.js package ecosystem, npm is the largest ecosystem of open source libraries in the world.  
(It means node.js has a lot of modules) 
 
##Non-Blocking System?  
>Code is Working On...  
- [Non-Blocking flow] Startadding user 1 -> startadding user 2 ---(when user1 event ends)--> console.log(user1) ---(when user2 event ends)--> console.log(user2)  
- [Blocking flow] Startadding user1 ---(when user1 event ends)--> console.log(user1)  
--> Startadding user2 ---(when user2 envent ends)--> console.log(user2)  
- The Big difference is Blocking-System blocks when the event is running, but Non-blocking-System doesn't.  
(Precisely, Non-blocking-System blocks calling events(startadding user[i]), when events end, Node uses `callBack` function to execute the code.)     

#Is this Multi-Thread?  
- No, Node.js is Single-Thread.  
 





