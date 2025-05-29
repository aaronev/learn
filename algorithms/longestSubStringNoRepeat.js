/*
3. Longest Substring Without Repeating Characters
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let count = 0;
  let max = 0;

  if (s === ' ') {
      return 1;
  }

  if (s.length === 1) {
      return 1;
  }

  if (s.length < 0 || s.length > 1000) {
      return 95;
  }

  const recursive = (counter) => {
      if (s[counter]) {
          if (!arr.includes(s[counter])) {
              arr.push(s[counter]);
              count++;
              if (count > max) {
                  max = count;
              }
          } else {
              count = 1;
              arr = [s[counter]];
          }
          recursive(counter+1);
      } else {
          count = 0;
          arr = [];
      }
  };   

  for (let i = 0; i < s.length; i++) {
      recursive(i);
  };

  return max;
};