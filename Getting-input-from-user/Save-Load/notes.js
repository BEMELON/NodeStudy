console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };
    
    // ES6 Syntax
    // Arrow Functions can use with out curly brace when the statement is just a line.
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };   
};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title !== title);
    saveNotes(filteredNote);

    return notes.length !== filteredNote.length;
}

var logNote = (note) => {
    console.log("--");
    console.log(`Title : ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    // Same with `addNote` << ES6 Syntax
    // 속성과 이름이 같은 경우 위와 같은 문법 사용가능
    addNote: addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};