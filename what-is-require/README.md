# What is require?  

- let us load module made with node.js(Check fs, os folder)  
- let us to use Third-Party libraries.  
- let us to use our own file.(Check otherFile folder)    

# What is Arrow Function?
 > Now working...  
 We can express our function just like below code.  
```
 module.exports.addNote = () => {  
    console.log('addNote');  
    return "new Note";  
 }
```    
 Also, when the statement is just a line,we can omit brace.  
 We do not have to write `return` becuase it implicts `return` statement.  
 
 ```
  var func = (string) => string === NULL;
 ```  
 # What is Regular Function?  
  - Regular function is similar as Arrow Function. But it seems to compensate for the shortcomings of Arrow functions.  
  ## Shortcomings of Arrow functions??  
    ```
    var user = {
      name : 'Melon',
      sayHi: () => console.log(`Hi!, I'm ${this.name}`), // Hi I'm undefined
      sayHiAlt () {
          console.log(arguments);
          console.log(`Hi, I'm ${this.name}`); // Hi, I'm Melon
      }
    ```
    - Arrow functions can not use `this` or `arguments`.  
 > In general if you don't need the `this` keyword or the `arguments` keyword you can use an arrow function.  
 And I always prefer using Arrow function over Regular functions when I can.  

# Using npm  
 - we can serch modules on [Node.js](nodejs.org)  
 - `npm install {moduleName}` installs modules  


# Setting Package.json  
- Package.json helps to installing package that installed in project.  
- You can set Package.json by below code in terminal.    
 `npm init`   
 You can use default value by pressing 'Enter' or some content. 

-In package.json(package-lock.json) file there are version of our modules.      
- `--save` Package will appear at package.json file.  
- Please think which modules need `--save` options.
> `npm install [module-name] -- save`  

# Using Package.json  
- npm install` installs all modules listed in package.json file.  

# Trouble Shooting  
	
## It prints ${user.username}, not my name.  
	You must use back ticks (`) when using es6's template strings.
