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

  if (height.length < 0 || height.length > 100000) {
      return 0;
  }

  let max = 0;

  for (let i = 0; i < height.length; i++) {
      // search forwards
      for (let j = i+1; j < height.length; j++) {
          let distance = j - i;
          let h = height[i] > height[j] ? height[j] : height[i];

          let res = distance * h;

          if (res > max) {
              max  = res;
          }
      }

      // search backwards
      for (let j = height.length-1-i; j > 0; j--) {
          let distance = j - i;
          let h = height[i] > height[j] ? height[j] : height[i];

          let res = distance * h;

          if (res > max) {
              max  = res;
          }
      }
  };
  
  // let lHigh = 0;
  // let foundInd = [];
  // let alreadyFound = [];

  // // find highest descrease

  // for (let i = 0; i < height.length; i++) {
  //     if (!alreadyFound.includes(i)) {
  //         if (height[i] === lHigh) {
  //             foundInd.push(i);
  //             alreadyFound.push(i);
  //         } else if (height[i] > lHigh) {
  //             lHigh = height[i];
  //             foundInd = [i];
  //             alreadyFound.push(i);
  //         }
  //     }
  // }

  // // for (let i = 0; i < (height.length > 1000 ? 100 : height.length); i++) {
      
  // // loop only highest index

  // for (let i = 0; i < foundInd.length; i++) {
  //     for (let j = i+i; j < height.length; j++) {
          
  //         let distance = j > foundInd[i] ? j - foundInd[i] : foundInd[i] - j;

  //         let lowestHeight = height[j] > height[foundInd[i]] 
  //             ? height[foundInd[i]] : height[j];

  //         let res = distance * lowestHeight;

  //         console.log(res, foundInd[i], lHigh);
          
  //         if (res > max) {
  //             max = res;
  //         }
  //     }
  // }

  // };

  return max;
};