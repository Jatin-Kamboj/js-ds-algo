// These are functions inside functions 
// They have access to lexical enviroment and can access the variales or data defined in the
// Parent scope directly

// The functions are lexically scope binded 
// IMPORTANT they (Child scope functions) will look into the [[SCOPE]] object to find the variables being used in the lower
// scope function. THerefore these parent scope variables will be saved in the (MEMORY HEAP).
// Which will then be used the loswe scope function named c in our case
function a() {
    const grandPa = 'Jatin'
    return function b() {
        const papa = 'Jatin 2'
        // function c will have access to the parent scope variables
        return function c() {
            const son = 'Rohit'
            return `${grandPa} > ${papa} > ${son}`
        }
    }
}

// Result wil include the parent scope variables
const result = a()()()
console.log('result :>> ', result);




// ----------------------------------------------------------------------------------------

// IMP -> Below example demonstrates that myName const variable will be accesible by the
// setTimeout before its init callback therefore JS engine will identity this as a closure and thus maintain the lexical
// scope (enviroment) variables
function hoistingClosure() {
    setTimeout(() => {
        console.log('myName :>> ', myName);
    }, 1000);

    const myName = 'Jatin Kamboj'
}

hoistingClosure()