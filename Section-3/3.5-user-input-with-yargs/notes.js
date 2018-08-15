console.log('Starting notes.js')

var addNote = (title,body) => {
	console.log('Adding Note',title,body);
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