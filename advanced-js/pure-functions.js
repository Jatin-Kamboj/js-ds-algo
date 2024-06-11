/**
 * Issues with the below functions is they are using the global state
 * Mutating Side effects made to global state
 * No predictability in functions
 */

const array = [1, 2, 4, 5]

// See this function is causing side effects to the global state (array) variable
// Removing the last element of the array
function mutateArray(arr) {
    arr.pop()
}

// Mutates and add a new element in the array
function mutateArrayData(arr) {
    arr.forEach(val => {
        arr.push(1)
    });
}


mutateArray(array)
mutateArrayData(array)
console.log('array :>> ', array);


// ------------------- PURE FUNCTIONS EXAMPLE ---------------------
const array2 = [1, 2, 4, 5]

function mutateArrayPure(arr) {
    // created copy of array
    const mutatedArray  = [...arr]
    mutatedArray.pop()
    return mutatedArray   
}

const pureArray = mutateArrayPure(array2)

// RESULT notice old array is not changed now or mutated
// mutateArrayPure function did not create any side effect to global state
console.log('array2 :>> ', array2);
console.log('pureArray :>> ', pureArray);