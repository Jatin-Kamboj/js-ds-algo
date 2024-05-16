function addBy(num1) {
    return function (num2) {
        return num1 + num2
    }
}

// Here we are reusing the functions for a specific task such as multiplying a specific number
// with other values
const addBy2 = addBy(2)
const addBy5 = addBy(5)

console.log('addBy5 :>> ', addBy5(5)); // 10
console.log('addBy2 :>> ', addBy2(6)); // 8