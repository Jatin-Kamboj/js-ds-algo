/**
 * First exercise add a new funtion which returns the last year
 */

function getLastYear() {
    return this.getFullYear() - 1
}

Date.prototype.getLastYear = getLastYear

const lastYear = new Date('1900-10-10')
console.log('lastYear :>> ', lastYear.getLastYear());


// Second 

function mapper(callback) {
    const newArray = []

    this.forEach((...ddd) => {
        newArray.push(`${callback(...ddd)} 😃`)
    });

    return newArray
}

Array.prototype.map = mapper

const newData = new Array(2).fill("").map((d, i) => {
    return i
})

console.log('newData :>> ', newData);