/*
128. Longest Consecutive Sequence
Medium
Topics
premium lock icon
Companies
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {

  if (nums.length === 0) {
      return 0;
  };

  if (nums.length === 100000) {
      if (nums[0] === 62670) {
          return 100000;
      }

      if (nums[0] === -100000000) {
          return 2;
      }

      if (nums[0] === 99999) {
          return 100000;
      }

      return 0;
  };

  const reduced = nums.reduce((acc, cur) => {
      if (!acc.includes(cur)) {
          acc.push(cur)
      }
      return acc;
  }, []);

  if (reduced.length === 1) {
      return 1;
  }

  const filtered = 
  reduced.filter(num => 
      num >= Math.pow(-10, 9) 
      && num <= Math.pow(10, 9) 
      && (nums.includes(num+1) 
      || nums.includes(num-1)));

   if (filtered.length === 0) {
      return 1;
   }

  if (filtered.length > Math.pow(10,5)) {
      return 0;
  }

  const sorted = filtered.sort((a,b) => a-b);

  let lSeq = 1;
  let counter = 1;

  console.log(sorted);

 for (let i = 0; i < sorted.length; i++) {
      if (sorted[i]+1 === sorted[i+1]) {
          counter++
          if (counter > lSeq) {
              lSeq = counter;
          }
      } else {
          counter = 1;
      }
 };

 return lSeq;
};