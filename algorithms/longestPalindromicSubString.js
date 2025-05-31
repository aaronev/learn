/*
5. Longest Palindromic Substring
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/


// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  // interate through string
  // i have to find the same letter of that s[i] somewhere else in the string
  // check if the letters going back wards is the same
  // if it is the same then store as the max;
  // continue until it finds the longest length

  let found = '';

  if (s.length === 1) {
      return s;
  }

  const recursive = (val, init, counter) => {
      console.log(val, init, counter);
      if (counter < s.length) {
          if (val === s[counter]) {
              if (s.slice(init, counter+1) === s.slice(init, counter+1).split('').reverse().join('')) {
                      if (s.slice(init, counter+1).length > found.length) {
                          found = s.slice(init, counter+1);
                      }
              }
          }
          recursive(val, init, counter+1);
      }
  };



  for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      recursive(s[i], i, i+1);
  };

  return found;
};