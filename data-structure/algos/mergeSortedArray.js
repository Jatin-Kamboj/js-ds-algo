function mergeSortedArray(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  console.log("mergedArray :>> ", mergedArray);
  // Sort the array and return the result
  return mergedArray.sort((a, b) => a - b);
}

const sortedArray = mergeSortedArray([3, 4, 7], [4, 32, 12]);
console.log('sortedArray :>> ', sortedArray);
