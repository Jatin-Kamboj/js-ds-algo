const dragon = {
    name: "Jatin",
    fire: true,
    sing() {
        console.log(`My name is ${this.name}`);
    }
}

const lizard = {
    name: "Ramu lizard"
}

// IGNORE : This is the part of curring
// dragon.sing.call(lizard)

// Resusing the function
// We borrowed the sing method from dragon for lizard to print the name
const lizardSing = dragon.sing.bind(lizard)
lizardSing()

// Lets inherit all the properties of dragon into the lizard
lizard.__proto__ = dragon
lizard.sing()

// check lizard is a prototype of dragon
const isPrototypeChain = dragon.isPrototypeOf(lizard)
console.log('isPrototypeChain :>> ', isPrototypeChain);


// Lets print down all the properties that lizard object has including inherited ones
// Looping an printing all the values in dragon object
// for (let data of dragon) {
//     console.log('lizard property is :>> ', data);
// }


console.log(lizard.hasOwnProperty("sing"));