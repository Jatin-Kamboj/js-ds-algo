/**
|--------------------------------------------------
| Third rule : Different terms for an input
| Consider each input differently
|--------------------------------------------------
*/

// This is the example of the Rule 3 Very important

/**
 * There are 2 inputs in the function
 * Consider boxes1 as input1 and boxes2 and input2
 * Because these are arrays and they can have any number of elements in them
 * Thus while calculation Big O we will cuse it as O(a + b)
 */
function printBoxes1andBoxes2(boxes1, boxes2) {
  boxes1.forEach((element) => {
    console.log(`Boxes1: ${element}`);
  });

  boxes2.forEach((element) => {
    console.log(`Boxes2: ${element}`);
  });
}

printBoxes1andBoxes2();

/**
|--------------------------------------------------
| Big (O^n) Quadratic operations NESTED LOOPS
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
