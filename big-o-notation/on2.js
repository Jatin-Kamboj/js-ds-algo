const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray() {
  // Log all the pairs in an array
  // First iteration of for loop
  const boxesLength = boxes.length - 1;
  // 5 * 5 = 25
  for (let i = 0; i <= boxesLength; i++) {
    //o(n)
    // 1
    const firstChar = boxes[i];
    for (let j = 0; j <= boxesLength; j++) {
      // O(n)
      // 1
      // 2
      // 3
      const secondChar = boxes[j];
      console.log(`${firstChar}${secondChar}`);
    }
  }
}

logAllPairsOfArray();
// O(n^2)
// (n * n) -> (5 * 5) Quadratic time
// Every time the no of elements increase the operation increases quadratically  
