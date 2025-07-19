
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

  for (let i = 0; i < nums.length-2; i++) {
      let counter = i+1;
      while(nums[counter] && nums[counter+1]) {
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