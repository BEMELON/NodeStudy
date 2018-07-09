console.log('Starting app..');

// fetch all of fs modules.
const fs = require('fs');

/**
 *  some warning occured when the Node version up to 7.
 *  so we have to alternate below code.
 *  there are two options, you can choose one.
 *  In this case, I will choose option one.
 */
// fs.appendFile('greetings.txt', 'Hello World!');

 // option one, using callback function. 
 fs.appendFile('greetings.txt','Hello, world!', function(err){
     if(err){
         console.log('Undable to write to file');
     }
 })
 

 // option two, using Sync fucntion.
 //fs.appendFileSync('greetings.txt', 'Hello World!');
