class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
const PI = 3.1426;
const multi = (num1, num2) => num1 * num2;

const sayHi = (name) =>{
    console.log('Hi, this is '+ name);
}

// module.exports.Person = Person;
// module.exports.PI = PI;
// module.exports.multi = multi;

module.exports = {multi, PI, Person, sayHi};
