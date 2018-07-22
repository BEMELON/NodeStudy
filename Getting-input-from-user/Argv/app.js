console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const yargs = require('yargs');
//console.log('Yargs', argv);
const titleOption = {
    describe : `Title of note`,
    demand : true,
    alias : `t`
};

const bodyOption = {
    describe : `Body of note`,
    demand : true,
    alias : `b`
};
const argv = yargs
    .command('add', 'Add a new note',{
        title: titleOption,
        body: bodyOption
    })
    .command('list", "list all notes')
    .command(`remove`, `Remove a note`, {
        title: titleOption
    })
    .command(`read`, `Read a note`, {
        title: titleOption
    })
    .help() // shows what other options is exist
    .argv;
var command = argv._[0];
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