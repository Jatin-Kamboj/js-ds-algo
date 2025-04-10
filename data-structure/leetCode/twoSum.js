// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums && !Array.isArray(nums)) return;

  const seenNumbers = new Map();
  let sumPair = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const compliment = target - num;

    if (seenNumbers.has(compliment)) {
      sumPair = [i, seenNumbers.get(compliment)];
    } else {
      seenNumbers.set(num, i);
    }
  }

  return sumPair;
};

const sumPair = twoSum([2, 7, 11, 15], 9);
console.log("sumPair :>> ", sumPair);
