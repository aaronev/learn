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
  // let obj = {};
  // let board = [];
  // let results = [];

  // const createBoard = () => {
  //     obj = {};
  //     for (let i = 1; i <=n; i++ ) {
  //         obj[i] = []
  //         for (let j = 1; j <=n; j++ ) {
  //             obj[i].push(j);
  //         }
  //     }
  // };

  // const removeAvail = (row, col) => {
  //     obj[row] = []; // remove row;
  //     for (let i = col; i <= n; i++) {
  //         obj[i].splice(obj[i].indexOf(col), 1); // removes all cols;
  //         if (obj[row-i]) {
  //             if (obj[row-i].indexOf(col+i) > -1) {
  //                 obj[row-i].splice(obj[row-i].indexOf(col+i), 1)
  //             }

  //              if (obj[row-i].indexOf(col-i) > -1) {
  //                 obj[row-i].splice(obj[row-i].indexOf(col-i), 1)
  //             }
  //         }

  //          if (obj[row+i]) {
  //             if (obj[row+i].indexOf(col+i) > -1) {
  //                 obj[row+i].splice(obj[row+i].indexOf(col+i), 1)
  //             }

  //              if (obj[row+i].indexOf(col-i) > -1) {
  //                 obj[row+i].splice(obj[row+i].indexOf(col-i), 1)
  //             }
  //         }
  //     }
  // };

  // let counter = 1;

  // placeQueens = (row, col) => {
  //     if (obj[row] !== undefined) {
  //         if (obj[row].indexOf(col) > -1) {
              
  //             removeAvail(row, col);
              
  //             let str = '';
  //             for (let i = 1; i <=n; i++) {
  //                 if (col === i) {
  //                     str+= 'Q';
  //                 } else {
  //                     str += '.'
  //                 }
  //             }
              
  //             if (str.match('Q')) {
  //                  board.push(str);
  //             }

  //             if (obj[row+1]){
  //                 for (let i = 0; i < obj[row+1].length; i++) {
  //                     placeQueens(row+1, obj[row+1][i]);
  //                 }
  //             }

  //             results.push(board);
  //             board = [];
  //             createBoard(); 
  //             placeQueens(1, counter++);
  //         }
  //     } 
  // };

  // createBoard();
  // placeQueens(1, counter);
  // return results //.filter(arr => arr.length === n);


/**
 * @param {number} n
 * @return {string[][]}
 */

 var solveNQueens = function(n) {
  // JavaScript Program to solve the n-queens problem
  
  // Function to check if it is safe to place
  // the queen at board[row][col]
  function isSafe(mat, row, col) {
  
      // Check this col on upper side
      for (let i = 0; i < row; i++)
          if (mat[i][col] === 1)
              return false;
  
      // Check upper diagonal on left side
      for (let i = row - 1, j = col - 1; 
            i >= 0 && j >= 0; i--, j--)
          if (mat[i][j] === 1)
              return false;
  
      // Check lower diagonal on left side
      for (let i = row - 1, j = col + 1;
            j < n && i >= 0; i--, j++)
          if (mat[i][j] === 1)
              return false;
  
      return true;
  }
  
  function placeQueens(row, mat) {
  
      // base case: If all queens are placed
      // then return true
      if (row === n)
          return true;
  
      // Consider the row and try placing
      // queen in all columns one by one
      for (let i = 0; i < n; i++) {
  
          // Check if the queen can be placed
          if (isSafe(mat, row, i)) {
              mat[row][i] = 1;
              if (placeQueens(row + 1, mat))
                  return true;
              mat[row][i] = 0;
          }
      }
      return false;
  }
  
  // Function to find the solution
  // to the N-Queens problem
  function nQueen(n) {
  
      // Initialize the board
      const mat = Array.from({ length: n }, 
                () => Array(n).fill(0));
  
      // If the solution exists
      if (placeQueens(0, mat)) {
  
          // to store the columns of the queens
          const ans = [];
          for (let i = 0; i < n; i++) {
              for (let j = 0; j < n; j++) {
                  if (mat[i][j] === 1) {
                      ans.push(j + 1);
                  }
              }
          }
          return ans;
      } else
          return [-1];
  }
  
  const ans = nQueen(n);
  
  let results = [];
  let b = [];
  
  for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
          if (ans[i] === j) {
              str += 'Q';
          } else {
              str += '.';
          }
      }
      b.push(str);
      results.push(b);
  };
  
  return results
  };