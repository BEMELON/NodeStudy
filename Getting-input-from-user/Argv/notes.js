console.log("Starting notes.js");

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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