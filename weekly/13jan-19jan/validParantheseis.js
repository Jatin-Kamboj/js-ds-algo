// Valid Parentheses:
// Check if a string of parentheses is valid. A valid string must have matching open and close parentheses in the correct order.
// Input: "({[]})"
// Input: "({[1]})" -> 7
// Get paranthesis
// Output: true

// [].shift()

function checkValidParantheseis(input) {
  if (!input) return;

  const inputArray = input.split("");
  console.log("inputArray :>> ", inputArray);

  const config = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openingParanthesisList = Object.keys(config);
  const closingParanthesisList = Object.values(config);
  const openingParanthesis = [];
  console.log("openingParanthesisList :>> ", openingParanthesisList);
  for (let char of inputArray) {
    console.log("char :>> ", char);
    // Opening Character
    if (openingParanthesisList.includes(char)) {
      openingParanthesis.push(char);
    }
    // ]
    else if (
      openingParanthesis.length === 0 ||
      char !== config[openingParanthesis.pop()]
    ) {
      console.log("False")
      return false;
    }
  }

  return true
  console.log("openingParanthesis :>> ", openingParanthesis);
}

// Solution is defined here
/**
 * Computers are dumb we need to define the datasets and the config of paranthesis in the program
 * Opening and closings
 * ({[
 * Stack LIFO
 * Compare last element of stack with current
 * [ === ]
 */

// const result = checkValidParantheseis("({[]})");
const result = checkValidParantheseis("([)]");
console.log("result :>> ", result);
