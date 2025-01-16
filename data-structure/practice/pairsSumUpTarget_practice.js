function pairsSumupTarget(input, target) {
  if (!input || !target || !Array.isArray(input)) return;

  // [2, 4, 3, 5, 7, 8, 1]
  // 8

  // Pair sample [3,5] (not repeatable)

  // List of seen numbers
  // List of pairs

  const pairs = new Set();
  const seenNumbers = new Set();

  // Sum 2 numbers
  // O(n)

  for (let i = 0; i < input.length; i++) {
    // 8 - 2 = 6 (find 6 number in (seen)) if it exists they are the pair
    // Add 2 to seem
    const compliment = target - input[i];
    if (seenNumbers.has(compliment)) {
      // 6 + 2
      pairs.add([compliment, input[i]]);
    }
    seenNumbers.add(input[i]);
  }

  return [...pairs.values()]
}

const result = pairsSumupTarget([2, 4, 3, 5, 7, 8, 1], 8);
console.log('result :>> ', result);
