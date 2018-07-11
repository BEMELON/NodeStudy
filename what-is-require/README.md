# What is require?  

- let us load module made with node.js(Check fs, os folder)  
- let us to use Third-Party libraries.  
- let us to use our own file.(Check otherFile folder)    

# What is Arrow Function?
 > Now working....
```
 module.exports.addNote = () => {  
    console.log('addNote');  
    return "new Note";  
 }
```

# Setting Package.json  
- Package.json helps to installing package that installed in project.  
- You can set Package.json by below code in terminal.    
 `npm init`   
 You can use default value by pressing 'Enter' or some content. 

-In package.json(package-lock.json) file there are version of our modules.      
- `--save` Package will appear at package.json file.  
> `npm install [module-name] -- save`  

# Using Package.json  
- npm install` installs all modules listed in package.json file.  

# Trouble Shooting  
	
## It prints ${user.username}, not my name.  
	You must use back ticks (`) when using es6's template strings.
