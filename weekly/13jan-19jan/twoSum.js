// Given an array of integers and a target number, find two numbers such that they add up to the target.
//  Return their indices.

// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1]

function findTwoSum(input, target) {
  if (!input || !Array.isArray(input) || !target) return;

  // Input: [2, 7, 11, 15], target = 9
  // Output: [0, 1]

  // O(n^)
  // Compare each element with elements present in the input
  // Will be less efficient

  // O(n)

  let output = null;

  const seenNumbers = new Set();

  for (let i = 0; i < input.length; i++) {
    // 9 - 2 = 7
    const compliment = target - input[i];

    // Resulting target
    if (seenNumbers.has(compliment)) {
      output = [compliment, input[i]];
    }

    seenNumbers.add(input[i]);
  }

  return output;
}

const result = findTwoSum([2, 7, 11, 15], 9);
console.log("result :>> ", result);
