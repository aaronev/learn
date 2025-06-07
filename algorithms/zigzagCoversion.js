/*
6. Zigzag Conversion
Medium
Topics
premium lock icon
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  let str = '';
  let obj = {};
  let zigzag = false;

  let counter = 0;

  for (let i = 0; i < numRows; i++) {
       obj[i] = '';
  }
  
   for (let i = 0; i < s.length; i++) {

       obj[counter] += s[i];

       if (counter === 0) {
           zigzag = false;
       } else if (counter === numRows-1) {
           zigzag = true;
       }

       zigzag ? counter-- : counter++ 
   }

   console.log(obj);

   for (key in obj) {
       str += obj[key];
   }

  return str;
};