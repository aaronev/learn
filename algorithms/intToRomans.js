/*
12. Integer to Roman
Solved
Medium
Topics
premium lock icon
Companies
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 

Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII
Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:

1000 = M
 900 = CM
  90 = XC
   4 = IV
 

Constraints:

1 <= num <= 3999
*/

// https://leetcode.com/problems/integer-to-roman/


/**
 * @param {number} num
 * @return {string}
 */

 var intToRoman = function(num) {
  let romans = ''

  const toRomans = (n) => {
      console.log(n);
      if (n - 1000 >= 0) {
          romans+='M'
          toRomans(n-1000);
      } else if (n - 900 >= 0) {
          romans+='CM'
          toRomans(n-900);
      } else if (n - 500 >= 0) {
          romans+='D'
          toRomans(n-500);
      } else if (n-400 >= 0) {
          romans+='CD'
          toRomans(n-400);
      } else if (n-100 >= 0) {
          romans+='C'
          toRomans(n-100);
      } else if (n-90 >= 0) {
          romans+='XC'
          toRomans(n-90);
      } else if (n-50 >= 0) {
          romans+='L'
          toRomans(n-50);
      } else if (n-40 >= 0) {
          romans+='XL'
          toRomans(n-40);
      } else if (n-10 >= 0) {
          romans+='X'
          toRomans(n-10);
      } else if (n-9 >= 0) {
          romans+='IX'
          toRomans(n-9);
      } else if (n-5 >= 0) {
          romans+='V'
          toRomans(n-5);
      } else if (n-4 >= 0) {
          romans+='IV'
          toRomans(n-4);
      } else if (n-1 >= 0) {
          romans+='I'
          toRomans(n-1);
      } 
  };
  
  toRomans(num);
  return romans;
};