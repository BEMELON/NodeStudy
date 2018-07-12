# Getting input from user  

## Getting input from argv  
- argv is a arguments that pass by command line
- we can process by `process.argv` but it is tooo complicated when we get extra inputs.    

### yarg Module  
 - yarg is a module that helps processing arguments passed by command lines.  
 - We can install by `npm install yarg --save`  
 `const yarg = require('yarg');`  
  (Ex. `node app.js read --title="hello"` and we can access `hello` by `yarg.title` )  
 