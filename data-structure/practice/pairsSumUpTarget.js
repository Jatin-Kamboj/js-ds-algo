function pairsSumUpTarget(input, target) {
  if (!input || !Array.isArray(input) || !target) return;
  // [2, 4, 3, 5, 7, 8, 1]
  // 8

  const pairs = new Set();
  const seen = new Set();

  for (let i = 0; i < input.length; i++) {
    // 8 - 2 = 6 ,2
    // 8 - 4 = 4 ,4
    // 8 - 3 = 5 , 3
    // 8 - 5 = 3 , 5
    const compliment = target - input[i];
    console.log("compliment :>> ", compliment);

    // Already exists
    if (seen.has(compliment)) {
      console.log("Found Pair", input[i]);
      pairs.add([compliment, input[i]]);
    } else {
      seen.add(input[i]);
    }
  }
  console.log("seen :>> ", seen);
  return [...pairs.values()];
}

const result = pairsSumUpTarget([2, 4, 3, 5, 7, 8, 1], 8);
console.log("result :>> ", result);
