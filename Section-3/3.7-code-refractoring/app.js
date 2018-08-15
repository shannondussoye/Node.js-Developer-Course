// npm init
// npm install yargs --save
console.log('Starting app.js');

const yargs = require('yargs');
const argv = yargs.argv;
// console.log('Process:',process.argv);
// console.log(argv);
const notes = require('./notes.js')


// var command = process.argv[2];
var command = argv._[0];
console.log('Command:', command);
if (command === 'add'){
	var note = notes.addNote(argv.title,argv.body); 
	if (note){
		console.log('Note Created');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Note title taken')
	}
} else if (command === 'list'){
	notes.getAll();
} else if (command === 'read'){
	notes.getNote(argv.title);
} else if (command === 'remove'){
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognised'); 
}


