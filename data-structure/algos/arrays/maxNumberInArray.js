function maxNumberInArray(numbers) {
  // if (!numbers || !Array.isArray(numbers)) return;

  // This is important to intialise the variable with first value in an array
  let maxNumber = numbers[0];
  // O(n)

  for (let i = 0; i < numbers.length; i++) {
    // console.log("numbers[i] :>> ", numbers[i]);
    // if(!maxNumber) maxNumber = numbers[i]
    
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }

  console.log('maxNumber :>> ', maxNumber);
  return maxNumber;
}

const value = maxNumberInArray([3, 5, 7, 2, 8]);
console.log("value :>> ", value);
