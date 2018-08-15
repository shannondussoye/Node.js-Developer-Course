//convert object to json
var obj = {
	name: 'Shannon'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);


//Convert json to object
var personString = '{"name": "Shannon", "age": 100}';
var person = JSON.parse(personString)
console.log(person);
console.log(typeof person) 