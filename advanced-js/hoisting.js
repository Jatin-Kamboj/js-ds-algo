// Value of the myName variable will be undefined 
// because var variable has a global scope thus duing the creation phase
// memory is allocated to the variable with undefined as a value of the same
console.log('myName :>> ', myName);

var myName = "Jatin Kamboj"
``
// This will invoke the function and print the value considering the function 
// is defined after the invocation of the function
printMyName("Rahul triwedi")

function printMyName(
    name
) {
    console.log('printMyName:name :>> ', name);
}

// This function invocation will throw an error because it is function expression
// thus all the global variable have undefined as their value by default 
expressionMyName("Roman")

var expressionMyName = function (name) {
    console.log('expressionMyName:name :>> ', name);
}