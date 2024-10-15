/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if ( !Array.isArray(nums)) return;

  const map = new Map();

  // All the items in the array to check sum of which indices is equal to target value
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log('complement :>> ', complement);

    // If the complement exists
    // The value which needs to be added in current item to get the target
    // 10 - 2 = 8
    // Check whether the complment exists in the map or not
    // If it exists then we will return index of current value and the complement value
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
    console.log('map :>> ', map);
  }

  // If there are no indices
  return [];
};


const result = twoSum([0,4,3,0], 0);

console.log('result :>> ', result);
