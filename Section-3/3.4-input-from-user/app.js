console.log('Starting app.js');

// run code with: node app.js list
// Acessing arguments
console.log(process.argv)
var command = process.argv[2];
console.log('Command:', command);
if (command === 'add'){
	console.log('Adding new note');
} else if (command === 'list'){
	console.log('Listing all Notes');
} else if (command === 'read'){
	console.log('Reading Notes')
} else if (command === 'remove'){
	console.log('Removing Notes')
} else {
	console.log('Command not recognised'); 
}


