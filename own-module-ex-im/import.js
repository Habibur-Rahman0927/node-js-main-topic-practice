const person = require('./person');
console.log(person);


const Export = require('./export');
const person1 = new Export.Person("Habib", 22);
person1.greeting();
console.log(person1);

console.log(Export.PI)

console.log(Export.multi(5,5));

console.log(Export.sayHi("Khan"))