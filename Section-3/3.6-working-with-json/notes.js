console.log('Starting notes.js')

const fs = require('fs')

var addNote = (title,body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch(e) {

	}

	// var duplicateNotes = notes.filter((note) => {
	// 	return note.title === title;
	// }) es5

	var duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0){
			notes.push(note);
			fs.writeFileSync('notes-data.json',JSON.stringify(notes))
	}
}

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('Reading Note',title);
}
var removeNote = (title) => {
	console.log('Deleting Note',title);
}

module.exports = {
	addNote,
	// or addNote: addNote es5
	getAll,
	getNote,
	removeNote
}