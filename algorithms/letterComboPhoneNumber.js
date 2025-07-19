// 17. Letter Combinations of a Phone Number
// Medium
// Topics
// premium lock icon
// Companies
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?source=submission-noac

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const phone = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j','k','l'],
      '6': ['m','n','o'],
      '7': ['p','q','r','s'],
      '8': ['t','u','v'],
      '9': ['w','x','y','z'],
  };

  const results = [];
  let work;

  if (digits.length === 4) {
      work = [phone[digits[0]], phone[digits[1]], phone[digits[2]], phone[digits[3]]];
      for (let l = 0; l < work[0].length; l++) {
          for (let k = 0; k < work[1].length; k++) {
              for (let j = 0; j < work[2].length; j++) {
                  for (let i = 0; i < work[3].length; i++) {
                      results.push(work[0][l]+work[1][k]+work[2][j]+work[3][i])
                  }
              }
          }
      }
  } else if (digits.length === 3) {
      work = [phone[digits[0]], phone[digits[1]], phone[digits[2]]];
      for (let k = 0; k < work[1].length; k++) {
          for (let j = 0; j < work[1].length; j++) {
              for (let i = 0; i < work[2].length; i++) {
                  results.push(work[0][k]+work[1][j]+work[2][i])
              }
          }
      }
  } else if (digits.length === 2) {
      work = [phone[digits[0]], phone[digits[1]]];
      for (let j = 0; j < work[0].length; j++) {
          for (let i = 0; i < work[1].length; i++) {
              results.push(work[0][j]+work[1][i]);
          }
      }
  } else if (digits.length === 1) {
      return phone[digits];
  }

  return results;
};