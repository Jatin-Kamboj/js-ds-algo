function reverseString(data) {
  if (!data || typeof data !== "string") return;

  let newString = "";
  const totalItems = data.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    newString += data[i];
  }

  return newString;
}

// const reversedString = reverseString({}); //O(n)
const reversedString = reverseString("Jatin Kamboj"); //O(n)
console.log("reversedString :>> ", reversedString);
