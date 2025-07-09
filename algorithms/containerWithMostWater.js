/*
11. Container With Most Water
Medium
Topics
premium lock icon
Companies
Hint
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let max = 0;

  const findMaxArea = (cur, curIndex, nextInd) => {
      let distance = nextInd - curIndex;
      let lowestHeight = height[nextInd] > height[curIndex] 
          ? height[curIndex] : height[nextInd];

      let res = distance * lowestHeight;

      console.log(cur, distance, lowestHeight, res);

      if (res > max) {
          max = res;
      }

      if (height[nextInd+1]) {
          findMaxArea(cur, curIndex, nextInd+1);
      }
  };

  for (let i = 0; i < height.length; i++) {
      findMaxArea(height[i], i, i+1);
  }

  return max;

};