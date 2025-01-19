// Merge Intervals:
// Given an array of intervals, merge all overlapping intervals.
// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]

function mergeIntervals(input) {
  // Identity overlapping array
  // even
  //  1 overlap 2
  // 1 == 2
  // total = 4
  // loop = 2 times

  const overlappingArray = [];

  let compareArr = input[0];
  let currentArr = input[0];

  const sortedInput = input.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log("sortedInput :>> ", sortedInput);
  const iterations = input.length / 2;

  let currentIndex = 0;
  for (let i = 0; i < iterations; i++) {
    let compareArr = sortedInput[currentIndex];
    let currentArr = sortedInput[currentIndex + 1];
    currentIndex += 2;
    console.log("compareArr :>> ", compareArr, currentArr);
    if (isOverlapping(compareArr, currentArr)) {
      overlappingArray.push(mergeOverlappedArray(compareArr, currentArr));
    } else {
      overlappingArray.push(compareArr, currentArr);
    }
  }

  return overlappingArray;
}

function mergeOverlappedArray(arr1, arr2) {
  const [start1, end1] = arr1;
  // [2, 6]
  const [start2, end2] = arr2;

  return [start1, end2];
}
function isOverlapping(arr1, arr2) {
  // [1, 3]
  // If there starting number in (arr2) is betweeb range of (arr1)
  let overlappedArray = [];
  const [start1, end1] = arr1;
  // [2, 6]
  const [start2, end2] = arr2;
  if (start2 < end1) {
    return true;
  }
  return false;
}

const result = mergeIntervals([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

console.log("result :>> ", result);
// recursion can be used here
