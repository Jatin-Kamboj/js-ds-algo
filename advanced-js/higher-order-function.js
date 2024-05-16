// Higher order Function
// These are the functions which either accepts functions asn arguments
// Or Function which returns a function

// In our case function is accepting a function 
// SO, here we are telling the function what to do such as passing data to function which will be used
// by the function and then telling function what to do with that data

function multiply(a, b) {
    console.log('multiply :>> ', {a,b});
    return a * b
}

// In our cse function is accepting a function 
function multiplyByTwo(num, cb) {
    return cb(2, num)
}

// In our cse function is accepting a function 
function multiplyByThree(num, cb) {
    return cb(3, num)
}

const multiplicationByTwo = multiplyByTwo(2, multiply)
console.log('multiplicationByTwo :>> ', multiplicationByTwo);

const multiplicationByThree = multiplyByThree(5, multiply)
console.log('multiplicationByThree :>> ', multiplicationByThree);



// CORRECT WAY and concise way to accomplish the HOF concept 
// IT IS VERY VERY USEFUL IN DAY TO DAY CODING IN JAVASCRIPT
console.log("\n--------------- CORRECT WAY ----------------------");

const multiplyBy = (num1) => (num2) => (num1 * num2)

const multiplyByTwoo = multiplyBy(2)
const multiplyByThreee = multiplyBy(3)
console.log('multiplyByTwoo(10) :>> ', multiplyByTwoo(10)); //20
console.log('multiplyByThreee(4) :>> ', multiplyByThreee(4)); //12


// We can attain the same using the curryig concept of the Javascript

const multiplyBy3Curring = multiply.bind(this,3)
console.log('multiplyBy3Curring :>> ', multiplyBy3Curring(3)); // Result (3*3) => 9