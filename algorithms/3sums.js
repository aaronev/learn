/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if (nums.length < 3 || nums.length > 3000) {
        return [];
    }

    let n = nums.filter(x => x >= -100000 && x <= 100000).sort((a,b) => a-b);
    let res = [];
    let foundCombos = [];

    const reduced = nums.filter(num => num === 0);

    if (reduced.length > 1) {
        foundCombos.push(`${[0,0,0]}`);
        res.push([0,0,0]);
    }

    const findCombo = (x,y,opp) => {
        if (n.includes(opp)) {
            if (n.indexOf(opp) !== n.indexOf(x) && n.indexOf(opp) !== n.indexOf(y)) {
                newArr = [x,y,opp].sort((a,b) => a-b);
                if (!foundCombos.includes(`${newArr}`)) { // combonation does not exist
                    foundCombos.push(`${newArr}`);
                    // push to results;
                    res.push(newArr);
                }
            }
        }
    }
    
    // if i had to loop just once
    for (let i = 0; i < n.length; i++) {
        
        // find opposite value if 0 exists;
        if (n.includes(0)) {
            // if n i is greater than 0 then see if negative value exists
            let firstNum = n[i];
            let secondNum = 0;
            let opp = n[i] > 0 ? -n[i] : Math.abs(n[i]);
            findCombo(n[i], 0, opp);
        };

        for (let j = i+1; j < n.length; j++) {
            let firstPart = n[i]+n[j];
            let opp = firstPart > 0 ? -firstPart : Math.abs(firstPart);
            findCombo(n[i], n[j], opp);
        }

    };

    return res;
};