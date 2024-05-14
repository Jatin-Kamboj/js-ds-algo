// (this) keyword allows access to all the properties a object have defined 
// Thus allowing us to use them in the other functions or objects as a DRY principle
const person = {
    name: "Jatin",
    lastname: "Kamboj",
    printName() {
        console.log('My name is :>> ', this.name);
        return this.name
    },
    fullname() {
        return `${this.printName()} ${this.lastname}`
    }
}

person.printName()
console.log('My fullname :>> ', person.fullname());


// Using strict mode in the JS functions
var firstname = 'Jatin'

function myName() {
    'use strict'
}

myName()


const person2 = {
    name: "Ramu"
}

person.printName.call(person2)
person.printName()
console.log('Before binding person to person2');
person.printName.bind(person2)
person.printName()
