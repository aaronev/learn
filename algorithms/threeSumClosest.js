// 16. 3Sum Closest
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104


// https://leetcode.com/problems/3sum-closest/?source=submission-noac

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums.sort((a,b)=> b-a);

  let res = Math.abs(nums[0]);
  
  if (res === target) {
      return target;
  }

  if (nums.length === 3) {
      return nums[0]+nums[1]+nums[2];
  }

  for (let i = 0; i < nums.length-2; i++) {
      let counter = i+1;
      while(counter+1 < nums.length) {
          let theSum = nums[i] + nums[counter] +nums[counter+1];
          console.log(theSum)
          if (theSum === target) {
              return target;
          }
          
          if (Math.abs(theSum) < res) {
              res = theSum;
          }
          counter++;
      };
  };

  return res;
};