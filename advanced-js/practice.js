const student = {
    name: "Jatin",
    age: 20,
    grade: "A+",
    changeGrade(newGrade) {
        this.grade = newGrade
    }
}

// Default object grade printing
student.changeGrade("B-")
console.log('student :>> ', student.grade);

const student2 = {
    grade: "A-"
}

student.changeGrade.call(student2, "A+")
console.log('student2 :>> ', student2.grade);


function sumTwoNumbers(a, b) {
    return a + b
}

const sumBy3 = sumTwoNumbers.bind(this,3)

// Currying
// Now the sum of the numbers will be 3 added in the parameter passed to the function
console.log('sumBy3 1 :>> ', sumBy3(4));
console.log('sumBy3 2 :>> ', sumBy3(5));
console.log('sumBy3 3 :>> ', sumBy3(6));


