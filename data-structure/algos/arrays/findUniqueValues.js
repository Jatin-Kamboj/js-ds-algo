// const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// function findUniqueValues(numbers) {
//   const uniqueValues = numbers.filter((val, i, self) => {
//     return self.indexOf(val) === i;
//   });

//   return { nums: uniqueValues, length: uniqueValues.length };
// }

// const result = findUniqueValues(input);
// console.log("result :>> ", result);

// const result1 = findUniqueValues([1, 1, 2]);
// console.log("result :>> ", result1);

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Correct solution 
// We are swapping the indexes values with unique values and Storing the last index
// Which will act as a count of total unique elemets
// The beneifit of this approach is not creating a new array in the memory 
// Using the existing one to return the count of totoa unique elements 
function findUniqueValues(numbers) {
  if (!numbers || !Array.isArray(numbers)) return;
  const uniqueValues = [];
  let j = 0;

  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] !== numbers[j]) {
      j++;
      numbers[j] = numbers[i];
    }
    // previousNum = numbers[i +1];
  }
  // const uniqueValues = numbers.filter((val, i, self) => {
  //   return self.indexOf(val) === i;
  // });

  return { nums: numbers.slice(0, j), length: numbers.length };
}

const result = findUniqueValues(input);
console.log("result :>> ", result);

// const result1 = findUniqueValues([1, 1, 2]);
// console.log("result :>> ", result1);
