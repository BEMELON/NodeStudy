console.log('Starting app..');

// fetch all of fs modules.
const fs = require('fs');

// fetch all of os modules
const os = require('os');

var user = os.userInfo();

// using template string format to use User information.
fs.appendFileSync('greetings2.txt', `Hello, ${user.username}!`);
