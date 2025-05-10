// https://leetcode.com/problems/subsets/

/*
78. Subsets
Medium
Topics
Companies
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  if (nums.length < 1 || nums.length > 10) {
      return 0;
  }   

  if (nums.length === 1) {
      return [[], nums];
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 10 || nums[i] < -10) {
          return 0;
      } 
  }

  let arr = [];
  let counter = 0;

  const getArr = (counter) => {
      if (counter !== nums.length) {
          arr.push([nums[counter]]);

          for (let i = counter; i > 0; i--) {
              if (nums[counter-i]) {
                  arr.push([nums[counter-i], nums[counter]]);
              }
          }
          getArr(counter+1);
      } 
  };

  getArr(counter);
  arr.unshift([]);
  arr.push(nums);

  return arr;
};