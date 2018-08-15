// download and save module
//npm install lodash --save

// download modiles
// npm install
console.log('Starting app,js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Shannon'))

var filteredArray = _.uniq(['Shannon',1,'Shannon',2,3,4])
console.log(filteredArray)