// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// "(]"

/**
 * Solution
 *
 * seenBrackets includes starting tags
 *
 * If current tag is not starting tag
 *    Then check Last tag in seenBrackets is the starting tag of current tag
 *      If yes --> Valid
 *
 *      else -> Return false and terminate
 */
var isValid = function (s) {
  if (!s) return;

  const seenBrackets = [];

  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    const openingBrackets = Object.values(bracketPairs);

    if (openingBrackets.includes(element)) {
      seenBrackets.push(element);
    } else {
      const closingBracket = bracketPairs[element];
      const lastBracket = seenBrackets.pop();

      if (closingBracket !== lastBracket) {
        return false;
      }
    }
  }
  return seenBrackets.length === 0;
};

// const result = isValid("()");
// const result = isValid("(]");
// const result = isValid("()[]{}");
const result = isValid("([]){}");

// const result = isValid("([)]");
console.log("result :>> ", result);
