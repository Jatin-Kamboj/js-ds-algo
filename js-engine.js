// iterate();

function iterate() {
    for (let i = 1; i < 21; i++) {
        console.log('i :>> ', i);
    }
}

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    printName(){
        console.log(`Student name is ${this.name}`);
    }
}

// Monkey patching a new function into a object on the runtime
Student.prototype.printAge = function () {
    console.log(`Student age is ${this.age}`);
}
const student1 = new Student("Jatin",27)

student1.printName()
student1.printAge()


