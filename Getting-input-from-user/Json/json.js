/**
 * JSON is not a STRING
 * Below code can help you.
 */

var obj = {
    name : 'Melon'
};


// it makes String to JSON. 
var stringObj = JSON.stringify(obj);

console.log(typeof stringObj); // string
console.log(stringObj); // {"name":"Melon"}

// personString.name doesn't exist
var personString = '{"name" : "Melon","age" : 21}';

// parse : String to JSON
var person = JSON.parse(personString);

console.log(typeof person) // object
console.log(person) // { name: 'Melon', age: 21 }

/**
 * Assignment 1
 * Changing Format.
 */

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
