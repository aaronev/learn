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

  let board = [];
  let results = [];
  let counter = 1;

  const validSpace = (row, col) => {
      
      // array positions is different from number value;
      rowPos = row-1;
      colPos = col-1;

      // row can't exists;
      if (rowPos < 0) {
          return false;
      }

      // check if row exists;
      if (board[rowPos]) { 
          return false;
      }

      // check if column is taken;
      for (let i = 0; i < board.lenght; i++) {
          if (board[i].indexOf('Q') === colPos) {
              return false;
          }
      };

      // check if diagnals are taken;
      for (let i = 1; i <= n; i++) {
          if (board[rowPos-i]) {
              if (board[rowPos-i].indexOf('Q') === colPos-1) {
                  return false;
              }
          }

          if (board[rowPos+i]) {
              if (board[rowPos+1].indexOf('Q') === colPos+1) {
                  return false;
              }
          }
      };

      return true;
  };

  const loop = (row, col) => {
      if (board.length <= n) {
          if (validSpace(row,col)) {
              let str  = '';
              for (let i = 0; i < n; i++) {
                  if (col === i) {
                      str += 'Q';
                  } else {
                      str += '.';
                  }
              }

              if (str.length === n) {
                  board.push(str);
              }

              if (board.length === n) {
                  results.push(board);
              }

              for (let i = 1; i <= n; i++) {
                  loop(row+1, col+i);
              }

              if (board.length === n) {
                  results.push(board);
                  board = [];
                  loop(1, counter++);
              };
              
          } else {

          }
      };
  };

  // loop(1, 1);

  // board=['....']

  // return validSpace(1,1);
};