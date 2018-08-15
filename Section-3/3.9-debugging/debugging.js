var person = {
    name: 'andrew'
};

person.age = 25;

debugger;

person.name = 'Mike';

console.log(person);

// node inspect debugging.js
// node --inspect-brk debuggins.js
//chrome://inspect
//open dedicated devtools for node