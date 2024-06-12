// Passing a set of parameters in a function 
// Difference between currying and Partial Application is the amount of params which needs to be passed to a function to return a result

const multiply = (a) => (b) => (c) => a * b * c
const value = multiply(5)(2)(10) //100
console.log('value :>> ', value);


// Now partial application 
// This bind function returns a new function (copy) with this pointed ti the null
const multiplyPartial = (a,b,c) => a*b*c

const multiplyPartialby2 = multiplyPartial.bind(null,5)

// Now when we will call this function, We will have to pass 2 remaining paramters in a single go // Which is opposite in currying
const multiplicationValue = multiplyPartialby2(2, 2)
console.log('multiplicationValue :>> ', multiplicationValue);

// In above example we are passing first paramter while creating a copy of a function
// Other parameters are passed while using the new copied function
