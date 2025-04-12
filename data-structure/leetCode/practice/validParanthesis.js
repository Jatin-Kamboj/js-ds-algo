var isValid = function (s) {
  if (!s) return;

  const seenBrackets = [];

  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  /**
   * Create a stack to store opening brackets
   *  If it is closing bracket
   *    Check if current bracket opening bracket exist at the last position in stack
   *    Yes then terminate and return false
   */

  const stringLength = s.length;
  const openingBrackets = Object.values(bracketPairs);
  for (let i = 0; i <= stringLength; i++) {
    const currentChar = s[i];

    if (openingBrackets.includes(currentChar)) {
      seenBrackets.push(currentChar);
    } else {
      // CHeck last element in stack
      if (seenBrackets.pop() !== bracketPairs[currentChar]) {
        return false;
      }
    }
  }

  return seenBrackets.length === 0;
};

// const result1 = isValid("()");
const result2 = isValid("(]");
// const result3 = isValid("()[]{}");
// const result = isValid("([]){}");

// const result = isValid("([)]");
// console.log("result :>> ", result1);
console.log("result :>> ", result2);
// console.log("result :>> ", result3);
// console.log("result :>> ", result);
