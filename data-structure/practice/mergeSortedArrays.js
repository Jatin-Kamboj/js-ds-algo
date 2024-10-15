// Do this excersise and talk through the thought process with yourself

function mergeSortedArrays(arr1, arr2) {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) return;

  // we need to merge these arrays into a single array
  // Sort these arrays in ascending order
  const combinedArray = [...arr1, ...arr2];
  const sortedArray = []

  let biggerValue = null;
  combinedArray.forEach((value) => { 

   })

  // return sortedArray.sort((a, b) => a - b);
}

const sorted = mergeSortedArrays([7, 5, 10], [8, 4, 23]);
// const sorted = mergeSortedArrays({ name: "Jatin" });

console.log("sorted :>> ", sorted);
