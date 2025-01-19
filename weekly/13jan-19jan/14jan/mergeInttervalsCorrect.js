function mergeIntervalsArray(input) {
  const sortedInput = [...input].sort((a, b) => a[0] - b[0]);

  const mergedArray = [sortedInput[0]];

  for (let i = 1; i < sortedInput.length; i++) {
    const lastMerged = mergedArray[mergedArray.length - 1];
    const currentInterval = sortedInput[i];

    if (lastMerged[1] > currentInterval[0]) {
      lastMerged[1] = Math.max(currentInterval[1]);
    } else {
      mergedArray.push(currentInterval);
    }
  }

  console.log("mergedArray :>> ", mergedArray);
}

/**
 * Using the first element using it from the variable
 * Then iterating from 1 
 * THis is how we can achieve to have 2 values to compare for on(n) time complexity
 */

mergeIntervalsArray([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
