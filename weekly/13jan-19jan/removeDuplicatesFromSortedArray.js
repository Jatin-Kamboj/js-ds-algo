// Remove Duplicates from Sorted Array:
// Write a function that removes duplicates in-place from a sorted array and returns the new length.
// Input: removeDuplicatesFromSortedArray([1, 1, 2, 2, 3, 4, 4])
// Output: 5 (Modified array: [1, 2, 3, 4])

// Two pointer technique can be used here
function removeDuplicatesFromSortedArray(sortedArray) {
  if (!sortedArray || !Array.isArray(sortedArray)) return;

  // i for loop
  // j comparater with another
  // i = 0, 1 1 == 1, j = 2,  1 == 2
  // j = 1, 1

  let j = 1;
  for (let i = 0; i < sortedArray.length; i++) {
    // 1
    // 1
    if (sortedArray[i] === sortedArray[j] && i !== j) {
      sortedArray.splice(j, 1);
    }

    j++;
  }
  console.log("sortedArray :>> ", sortedArray);
}

removeDuplicatesFromSortedArray([1, 1, 2, 2, 3, 4, 4]);

// Remove Duplicates from Sorted Array:
// Write a function that removes duplicates in-place from a sorted array and returns the new length.
// Input: removeDuplicatesFromSortedArray([1, 1, 2, 2, 3, 4, 4])
// Output: 5 (Modified array: [1, 2, 3, 4])

// Two pointer technique can be used here
function removeDuplicatesFromSortedArray2(sortedArray) {
  if (!sortedArray || !Array.isArray(sortedArray)) return;

  // Important points and notes
  // Unique values
  // Moving unique values to the front
  // Swap j value with i value after moving the index by one

  // one pointer to keep the unique values and another for current value
  let j = 0;
  for (let i = 1; i < sortedArray.length; i++) {
    // 1 == 1
    if (sortedArray[i] !== sortedArray[j]) {
      j++;
      console.log(
        `j :>> ${j} i-> ${i}, jvalue ${sortedArray[j]}, ivalue -> ${sortedArray[i]}`
      );
      sortedArray[j] = sortedArray[i];
    }
  }
  // console.log("sortedArray :>> ", sortedArray);
  // console.log("j :>> ", j);
  return sortedArray.slice(0, j + 1);
}

const result = removeDuplicatesFromSortedArray2([1, 1, 2, 2, 3, 4, 4]);
console.log("result :>> ", result);
