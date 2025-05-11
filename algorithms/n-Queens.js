/*

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

Example 1:


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9


*/

// https://leetcode.com/problems/n-queens/description/

// explanation: https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/


/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  let obj = {};
  let board = [];
  let results = [];

  const createBoard = () => {
      for (let i = 1; i <=n; i++ ) {
          obj[i] = []
          for (let j = 1; j <=n; j++ ) {
              obj[i].push(j);
          }
      }
  };

  const removeAvail = (row, col) => {
      obj[row] = []; // remove row;
      for (let i = col; i <= n; i++) {
          obj[i].splice(obj[i].indexOf(col), 1); // removes all cols;
          if (obj[row-i]) {
              if (obj[row-i].indexOf(col+i) > -1) {
                  obj[row-i].splice(obj[row-i].indexOf(col+i), 1)
              }

               if (obj[row-i].indexOf(col-i) > -1) {
                  obj[row-i].splice(obj[row-i].indexOf(col-i), 1)
              }
          }

           if (obj[row+i]) {
              if (obj[row+i].indexOf(col+i) > -1) {
                  obj[row+i].splice(obj[row+i].indexOf(col+i), 1)
              }

               if (obj[row+i].indexOf(col-i) > -1) {
                  obj[row+i].splice(obj[row+i].indexOf(col-i), 1)
              }
          }
      }
  };

  placeQueens = (row, col) => {
      if (obj[row] !== undefined) {
          if (obj[row].indexOf(col) > -1) {
              
              removeAvail(row, col);
              
              let str = '';
              for (let i = 1; i <=n; i++) {
                  if (col === i) {
                      str+= 'Q';
                  } else {
                      str += '.'
                  }
              }

              obj[row] = [];
              obj[row].push(str);
              placeQueens(row+1, obj[row+1][0]);
          } else {
              
          }
      }
  };

  createBoard();
  placeQueens(1, 1);

  return obj;
  // return results;
};
