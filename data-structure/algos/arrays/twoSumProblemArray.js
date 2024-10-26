/**
 * Problem Statement:
   Given an array of integers nums and an integer target, 
   return the indices of the two numbers such that they add up to target. 
   You may assume that each input would have exactly one solution, and you may not use the same element twice.

   Example:
   Input:
   nums = [2, 7, 11, 15], target = 9
   
   Output:
   [0, 1]
   
   Input:
   nums = [3, 2, 4], target = 6
   
   Output:
   [1, 2]
 */
function twoSumProblem(nums, target) {
  if (!nums || !Array.isArray(nums)) return;

  // [0, 1]
  // O(n ^ 2)

  // [2, 7, 11, 15]
  for (let i = 0; i < nums.length; i++) {
    // 2
    const comparer = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const compareWith = nums[j];

      if (comparer + compareWith === target) {
        return [i, j];
      }
    }
  }

  /**
   * When there is not solution or when there ar eno elements whose sum adds upto the target
   * @description 
   */
  return null
}

// [0, 1]
const result = twoSumProblem([2, 7, 11, 15], 9);
console.log("result -> ", result);

// [1, 2]
const result2 = twoSumProblem([3, 2, 4], 6);
console.log("result2 :>> ", result2);
