console.log("Starting notes.js");

const fs = require('fs');
var addNote = (title, body) => {
    var notes =[];
    var note = {
        title,
        body
    };
    
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        console.log(e);
    }

    // ES6 Syntax
    // Arrow Functions can use with out curly brace when the statement is just a line.
    var duplicateNotes = notes.filter((note) => note.title === title );
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }   
};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log("removeing note", title);
}
module.exports = {
    // Same with `addNote` << ES6 Syntax
    // 속성과 이름이 같은 경우 위와 같은 문법 사용가능
    addNote: addNote,
    getAll,
    getNote,
    removeNote
};