console.log('Starting notes.js');


//console.log(module);

module.exports.age = 25;

/*
module.exports.addNote = function () {
    console.log('addNote');
}
*/


module.exports.addNote = () => {
    console.log('addNote');
    return "new Note";
}

module.exports.add = (a,b) => {
    return a + b;
}
