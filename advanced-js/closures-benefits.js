// what are the benefits of closures

// Memory management

function heavyDuty() {
    const arrayData = new Array(1000).fill('jj')
    return function (index) {
        return arrayData[index]
    }
}

// We are saving the memory here because we created the bigger array in the parent function (Closure)
// Which returns a new function thus the array is created only once 
// Allowing user to fetch a specific index value from an array by reusing the already created array

// 1. Prevents global cope polluting by keeping data in the local scope enviroment
 
const findByIndex = heavyDuty()
console.log('findByIndex(1) :>> ', findByIndex(1));

// Encapsulation