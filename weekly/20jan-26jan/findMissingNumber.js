/**
 * Find the Missing Number:
   Find the one missing number in a given array of size n containing numbers from 0 to n.
   Input: [3, 0, 1]
   Output: 2
 */

function findMissingNumber(input) {
  console.log("findMissingNumber:input :>> ", input);

  // PROBLEM: find missing number

  // Iterate over the array
  // Sort the array using a copy of input object
  // Variable to store last number (Comparer)
  // lastNumber + 1 == currentNumber

  let missingNumber = null;
  const sortedInput = [...input].sort((a, b) => a - b);

  let previousNumber = sortedInput[0];
  let nextNumber = previousNumber + 1;

  for (let i = 1; i < sortedInput.length; i++) {
    if (nextNumber !== sortedInput[i]) {
      missingNumber = nextNumber;
    }
    previousNumber = sortedInput[i];
    nextNumber = previousNumber + 1;
  }

  return missingNumber;
}

const missingNumber = findMissingNumber([3, 0, 1]);
console.log('missingNumber :>> ', missingNumber);
