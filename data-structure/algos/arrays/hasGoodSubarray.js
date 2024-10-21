// Determine if a given array contains a subarray of at least two elements whose sum is a multiple of a specified number k.

// An array is considered to have a "good subarray" if there exists at least one subarray (consisting of two or more elements) such that the sum of the elements in this subarray is a multiple of k.

// For example, the array [23, 2, 4, 7] with k = 6 has a "good subarray" ([2, 4]), as the sum 6 is a multiple of k = 6. The array [5, 0, 0, 0] with k = 3 does not have any "good subarray", as no subarray of two or more elements sums to a multiple of 3.

// nums = [23, 2, 4, 7], k = 6
// output: true

// nums = [5, 0, 0, 0], k = 3
// output: false

// nums = null, k = 1
// output: false

function hasGoodSubarray(nums, k) {
  if (!nums || !k) return false;

  const numbers = new Map();

  // 6
  // 23 - 6 = 17
  // 6 - 2 = 4
  // 6 - 4 = 2
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    const complement = k - nums[i];

    if (numbers.has(complement) || complement == 0) {
      return true;
    }
    numbers.set(nums[i], i);
  }

  return false;

  // your code goes here
}

// debug your code below
console.log(hasGoodSubarray([23, 2, 4, 7], 6));
