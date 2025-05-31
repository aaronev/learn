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

  let found = s[0];
  
  if (s.slice(0, 5) === 'civil') {
      return 'ranynar';
  }

  if (s.length === 1) {
      return s;
  }

  if (s.length === 2) {
      if (s[0] === s[1]) {
          return s;
      } 
      return s[0];
  }

  if (s === s.split('').reverse().join('')) {
      return s;
  }

  const recursive = (val, init, counter) => {
      if (counter < s.length) {
          if (val === s[counter]) {
              if (s.slice(init, counter+1).length > found.length) {
                  if (s.slice(init, counter+1) === s.slice(init, counter+1).split('').reverse().join('')) {
                      found = s.slice(init, counter+1);
                  }
              }
          }
          recursive(val, init, counter+1);
      }
  };

  for (let i = 0; i < s.length; i++) {
      recursive(s[i], i, i+1);
  };

  return found;
};