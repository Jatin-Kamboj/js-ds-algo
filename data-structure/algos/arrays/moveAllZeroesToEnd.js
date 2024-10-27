// Given an array nums, write a function to move all 0s to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input:
// nums = [0, 1, 0, 3, 12]

// Output:
// [1, 3, 12, 0, 0]

// function moveAllZeroesToEnd(nums) {
//   let zerosCount = 0;
//   // Add guard clause
//   // Iterate over all items in an array

//   // Splice zero value and push it into the new array

//   // Save the total length of an array
//   const numbsCount = nums.length;

//   for (let i = 0; i < numbsCount; i++) {
//     // Check if current value is zero
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//       zerosCount++;
//     }
//   }
//   return [...nums, ...new Array(zerosCount).fill(0)];
// }

// // [1, 3, 12, 0, 0]
// const result = moveAllZeroesToEnd([0, 1, 0, 3, 12]);
// console.log("result :>> ", result);

// ------------------------------------------------------------------------------------

function moveAllZeroesToEnd(nums) {
  // variable with current value
  // Index of other value

  console.log(nums);

  let j = 0;
  const numsCount = nums.length;

  // [0, 1, 0, 3, 12]
  for (let i = 0; i < numsCount; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  while (j < numsCount) {
    nums[j] = 0;
    j++;
  }

  // 0, 1 = 1, 0
  // [nums[j], nums[i]] = [nums[i], nums[j]];

  return nums;
}

// [1, 3, 12, 0, 0]
const result = moveAllZeroesToEnd([0, 1, 0, 3, 12]);
console.log("result :>> ", result);
