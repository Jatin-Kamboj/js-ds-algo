// Maximum Subarray (Kadane's Algorithm):
// Find the largest sum of a contiguous subarray.
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Subarray: [4, -1, 2, 1])

/**
 * It is an alog which allows us to get the max number in an array using O(n) algo
 * Keep track of currentSum
 * Keep track of maxSum
 */

function maximumSubarrayKadaneAlgorithm(input) {
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  let maxSum = 0;
  let maxArray = [];
  let currentSum = 0;
  let currentMaxArray = [];

  for (let num of input) {
    // Keep the max here
    // 0 + -2 = -2
    // -2,-2

    currentSum = Math.max(num, currentSum + num);

    // Find largest number here
    // when current sum is less than 0 reset it to 0
    // Don;t update the max

    // Reset maxArray to empty
    if (currentSum + num <= 0) {
      maxArray = [];
    }
    // Push current num into maxArray to keep record of sub array
    else if (currentSum > 0) {
      maxArray.push(num);
      // console.log("push:maxArray :>> ", maxArray);
    }

    // Set the maxSum  to currentSum if currentSum is greater than maxSum
    if (currentSum > 0 && currentSum > maxSum) {
      maxSum = currentSum;
      currentMaxArray = maxArray;
      // console.log('result:currentMaxArray :>> ', currentMaxArray);
    }
  }
  return { currentMaxArray, result: maxSum };
}

const result = maximumSubarrayKadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("result :>> ", result);
