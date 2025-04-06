/**
|--------------------------------------------------
| Third rule : Different terms for an input
| Consider each input differently
|--------------------------------------------------
*/

const boxes = [1, 2, 3, 4, 5];

// Time and space complexity of this function is O(n*2)
// Eg -> 5 * 5 = 25
// There will be 25 operations executed by the function in order to get a desired result
function logAllPairs(boxes) {
  // Compare each number with another one
  // Nested loop
  // 11 12 13 etc

  const boxesLength = boxes.length;
  for (let i = 0; i < boxesLength; i++) {
    for (let j = 0; j < boxesLength; j++) {
      console.log(`Pair id ${boxes[i]}${boxes[j]}`);
    }
  }
}

logAllPairs(boxes);
