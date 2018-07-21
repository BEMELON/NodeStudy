console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const yargs = require('yargs');
const argv = yargs.argv;

//console.log('Yargs', argv);
//console.log('Process', process.argv);

var command = process.argv[2];
//console.log("Command : ", command);

var notes = require('./notes.js');


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added!");
        notes.logNote(note);
    } else {
        console.log("Note title taken");
    }
} else if (command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log(`Note found!`);
        notes.logNote(note);
    } else {
        console.log(`Note not found!`);
    }
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note wasn't removed";
    console.log(message);
    
} else {
    console.log('Command not recongized');
} 