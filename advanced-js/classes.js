// Creating a object and blueprint of it.
// Therefore all the operation to the object will be done using this class
class Student {
    #privateName = "Jaitn"

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon

     
    }

    printPrivateName(){
        console.log('this.#privateName :>> ', this.#privateName);
    }

    // Private function 
    // These are not accessible from outside of the class
    #setPrivateName(name){
        this.#privateName = name
    }

    attack(){
        return `attack with ` + this.weapon
    }
}

// Created a instance of a class (Object)
// It is created using the new keyword
const student1 = new Student("Jatin","Sword")
console.log('object :>> ', student1.attack());
console.log('printPrivateName :>> ', student1.printPrivateName());
console.log('#setPrivateName :>> ', );