/**
 * Rotate an array to the right by k steps.
 * Input: [1, 2, 3, 4, 5, 6, 7], k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 */ 

function rotateArrayByKSteps(input, steps) {
  if (!input || !Array.isArray(input) || !steps) return;

  /**
   * Iterate over all elements Loop
   * rotatedArray = [] Save the new rotated elements
   */
  let rotatedArray = [];
  console.log("rotateArrayByKSteps");
  for (let i = 0; i < input.length; i++) {
    let newIndex = i + steps;
    // 3 , 8 = 12
    // 10
    console.log("newIndex ->", newIndex);
    if (newIndex > input.length - 1) {
      console.log("If:newIndex ->", newIndex);
      newIndex = newIndex - input.length;
      console.log("If:After:newIndex ->", newIndex);
    }P
    rotatedArray.push({
      index: newIndex,
      item: input[i],
    });
  }

  // negative goes back and positive to front
  return [...rotatedArray]
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
}

const result = rotateArrayByKSteps([1, 2, 3, 4, 5, 6, 7], 3);
console.log("result  :>> ", result);
