//Normal Function
// var square = function square(x){
//     return x*x;
// }

//1
// var square = (x) => {
//     var result = x*x;
//     return result
// };
// console.log(square(9));

//2
// var square = (x) => x * x;
// console.log(square(9));

//3
// var square = x => x * x;
// console.log(square(9));

var user = {
    name: 'String',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`); //this does not work in arrow function
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    } // without the colon it works.
};
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);