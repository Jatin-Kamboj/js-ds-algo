// Longest Substring Without Repeating Characters:
// Find the length of the longest substring that does not contain duplicate characters.
// Input: "abcabcbb"
// Output: 3 (Substring: "abc")

// Recomendations The sliding window technique

function longestSubstringWithoutRepeatingCharacters(input) {
  if (!input) return;
  console.log("input :>> ", input);

  /**
  |--------------------------------------------------
  Iterate over all characters
  var = longest substring
  var = save characters in MAP()
  if(current_char exists?)
    then start new sub string
    swap value in longest sub string if new length is bigger than previous

  |--------------------------------------------------
  */

  let longestSubstring = "";
  let currentSubString = "";
  let repeatingCharacter = new Set();

  for (let char of input) {
    console.log("char :>> ", char);
    if (
      repeatingCharacter.has(char) &&
      currentSubString.length > longestSubstring.length
    ) {
      longestSubstring = currentSubString;
      console.log("longestSubstring :>> ", longestSubstring);
      repeatingCharacter.clear();
      currentSubString = "";
    } else {
      repeatingCharacter.add(char);
      currentSubString += char;
    }
  }
}

longestSubstringWithoutRepeatingCharacters("abcabcbb");
