// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 2) { return strs[0]; } 
  //sort the array based on length
  strs.sort((a,b)=> a.length-b.length);

  // check the shortest
  const short = strs[0];
  let i = 0;
  let continues = true;
  let results = '';
  while (i < short.length && continues) {
      let j = 0;
      while (j < strs.length) {
          if (strs[j][i] !== short[i]) {
              continues = false;
          } 
          j++
      };

      if (continues) {
          results += short[i]
      }
      i++
  };

  return results;
};
