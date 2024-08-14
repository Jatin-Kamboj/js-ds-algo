function reverseString(word) {
  if (!word) return "";

  let reversedWord = "";
  const wordCharacters = word.split("");

  for (let i = wordCharacters.length - 1; i >= 0; i--) {
    reversedWord += wordCharacters[i];
  }
  return reversedWord;
}

const result = reverseString("My name is Jatin.");
console.log("result :>> ", result);
