/**
|--------------------------------------------------
| Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

  Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
  Return k.
|--------------------------------------------------
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /**
   * 1. Add guard clause
   * 2. Iterate over the nums array
   * 3. Use the Two pointer solution to rotate index
   * 4. i current element ,j for rotating
   *  This works for a sorted array / It is in ascending order
   */

  if (!nums && !Array.isArray(nums) && nums.length == 0) return;

  const numsLength = nums.length;
  let totalUniqueNums = 1;
  let j = 0;
  let previousNum = nums[0];

  for (let i = 1; i < numsLength; i++) {
    const currentNum = nums[i];

    if (currentNum !== previousNum) {
      j++;
      nums[j] = currentNum;
      totalUniqueNums++;
    }
    previousNum = currentNum;
  }

  return totalUniqueNums;
};

const ouput = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("ouput :>> ", ouput);
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
