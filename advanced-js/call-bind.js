const wizard = {
    power: 60,
    heal(num) {
        this.power += num
    }
}

const wizard2 = {
    power: 40,

}

// console.log('Before wizard before healing:>> ', wizard2.power);
// wizard.heal.call(wizard2, 20)
// console.log('Wizard healed :>> ', wizard2.power);


// Bind function for the new refference of the child object

// Bind function creates a new function which will be copy of the parent object heal function
// which can then be used further
const healWizard2 = wizard.heal.bind(wizard2)
healWizard2(30)
// console.log('healWizard2 :>> ', healWizard2);
console.log('Wizard healed :>> ', wizard2.power);

// Excersise for bind, apply and call

const array = [1, 2, 3];

// const maxNumber = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr
// }, 0)
function getMaxNumber(arr) {
    return arr.reduce((prev, curr) => prev > curr ? prev : curr, 0)
}

const maxNumber = getMaxNumber(array) // should return 3


// Github solution 

// function getMaxNumber(arr) {
//     return Math.max.apply(null, arr);
// }