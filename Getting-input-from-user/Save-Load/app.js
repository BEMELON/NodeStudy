console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const yargs = require('yargs');
const argv = yargs.argv;

console.log('Yargs', argv);
console.log('Process', process.argv);

var command = process.argv[2];
console.log("Command : ", command);

var notes = require('./notes.js');


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recongized');
} 