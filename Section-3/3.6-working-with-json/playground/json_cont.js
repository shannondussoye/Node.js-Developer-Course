const fs = require('fs');

var originalNote = {
	title: 'some title',
	body: 'some body'
};
originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title)