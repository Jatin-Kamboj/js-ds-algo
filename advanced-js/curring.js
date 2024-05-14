function multiple(a, b) {
    return a * b
}

// Over here we are creating a copy of a function with initial value of first parameter as 2
const multiplyWith2 = multiple.bind(this,2)

const result = multiplyWith2(10)
// The result will be 10 * 2 = 20
// Because we are using the first argument value as 2 and second one will be 10
console.log('multiplication :>> ',result);