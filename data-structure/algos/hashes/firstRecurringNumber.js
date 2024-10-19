//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function findFirstRecurringNumber(numbers) {
  if (!numbers || !Array.isArray(numbers)) return;

  const existingCharacters = new Map();

  // O(n) solution
  for (let i = 0; i < numbers.length; i++) {
    if (existingCharacters.has(numbers[i])) {
      return numbers[i];
    }
    existingCharacters.set(numbers[i], i);
  }

  return undefined;
}

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
findFirstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]);

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
findFirstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]);

//Given an array = [2,3,4,5]:
//It should return undefined
const result = findFirstRecurringNumber([2, 3, 4, 5]);
