function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

function lengthOfLongestSubstring(s) {
  if (!s || isBlank(s)) return s?.length;

  const charsList = new Map();
  let longestSubString = "";

  for (let i = 0; i < s.length; i++) {
    if (charsList.has(s[i])) {
      const newSubstring = Array.from(charsList.keys()).join("");

      if (!longestSubString) {
        longestSubString = newSubstring;
        console.log("longestSubString :>> ", longestSubString);
        charsList.clear();
      } else if (
        longestSubString &&
        longestSubString.length < newSubstring.length
      ) {
        longestSubString = newSubstring;
        charsList.clear();
      }
    } else {
      longestSubString += s[i];
    }

    charsList.set(s[i], i);
  }
  console.log("longestSubString :>> ", longestSubString);
  return longestSubString.length;
}

// const value = lengthOfLongestSubstring("abcabcbb");
// const value2 = lengthOfLongestSubstring("bbbbb");

// wke
const value3 = lengthOfLongestSubstring("pwwkew");
console.log("value3 :>> ", value3);

// const value4 = lengthOfLongestSubstring("   ");
const value4 = lengthOfLongestSubstring("au");
console.log("value4 :>> ", value4);

// console.log("value :>> ", value.length);
// console.log("value2 :>> ", value2.length);
