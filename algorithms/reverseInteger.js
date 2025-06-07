/*
Medium
Topics
premium lock icon
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

// https://leetcode.com/problems/reverse-integer/description/


/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

  let str = x+'';

  let arr = str.split('').reverse();

  if (arr[0] == 0) {
      arr.shift();
  }

  if (arr[arr.length-1] === '-') {
      arr.pop()
      arr.unshift('-');
  }

  let num = Number(arr.join(''));

  if (num > 2147483648 - 1 || num < -2147483648) {
      return 0;
  } 

  return num;
};