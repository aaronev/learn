/*
18. 4Sum
Solved
Medium
Topics
premium lock icon
Companies
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

// https://leetcode.com/problems/4sum/description/

function fourSum(nums: number[], target: number): number[][] {


  if (nums.length < 4) {
      return [];
  }

  nums.sort();
  let i = 0;
  const result: number[][] = [];
  const found: string[] = [];

  const unique = nums.filter((val,ind, arr) => arr.indexOf(val) === ind, []);

  if (unique.length === 1) {
      if (target/4 === unique[0]) {
          return [[unique[0], unique[0], unique[0], unique[0]]];
      }
  }


  while (i < nums.length) {
      let j = i+1;
      while (j < nums.length) {
          let k = j+1;
          while (k < nums.length) {
              let l = k+1;
              while (l < nums.length) {
                  if (nums[i]+ nums[j] + nums[k] + nums[l] === target) {
                      if (!found.includes(`${[nums[i],nums[j],nums[k],nums[l]]}`)) {
                          found.push(`${[nums[i],nums[j],nums[k],nums[l]]}`);
                          result.push([nums[i],nums[j],nums[k],nums[l]]);
                      }
                  } 
                  l++;
              };
              k++
          };
          j++
      };
      i++  
  };
  
  return result
};