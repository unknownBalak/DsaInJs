//Write a function called findLongestSubstring, which accepts a string and returns the
//the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  if (str.length === 0) return null;
  let i = 0,
    obj = {},
    start = 0,
    longest = 0;
  while (i < str.length) {
    let c = str[i];
    if (obj[c]) start = Math.max(start, obj[c]);
    longest = Math.max(longest, i - start + 1);
    obj[c] = i + 1;
    i++;
  }
  return longest;
}
console.log(findLongestSubstring("thisisawesome"));
