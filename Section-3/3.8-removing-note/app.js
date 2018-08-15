// npm init
// npm install yargs --save
//console.log('Starting app.js');

const yargs = require('yargs');
const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const bodyOptions = {
	describe: 'Body of the note.',
	demand: true,
	alias: 'b'
};
const argv = yargs
  .command('add','Add a new note',{
	title: titleOptions,
	body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note',{
	title: titleOptions
  })
  .command('remove','Remove a note',{
	title: titleOptions
  })
  .help()
  .argv;
// console.log('Process:',process.argv);
// console.log(argv);
const notes = require('./notes.js')


// var command = process.argv[2];
var command = argv._[0];
//console.log('Command:', command);
if (command === 'add'){
	var note = notes.addNote(argv.title,argv.body); 
	if (note){
		console.log('Note Created');
		notes.logNote(note);
	} else {
		console.log('Note title taken')
	}
} else if (command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
	var note = notes.getNote(argv.title);
	if (note){
		console.log('Note Found')
		notes.logNote(note);
	} else {
		console.log('Note not Found');
	}
} else if (command === 'remove'){
	var notesRemoved = notes.removeNote(argv.title);
	var message = notesRemoved ? 'Note was remove' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognised'); 
}


