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
  let results = [];

  if ( n === 1) {
      return [['Q']];
  }

  const createBoard = () => {
      let board = {};
      let takenCols = [];
      let takenRows = [];

      for (let i = 0; i < n; i++) {
          board[i] = "";
      };

      board.results = () => {
          let arr = [];
          for (let i = 0; i < n; i++) {
              if (board[i] !== '') {
                   arr.push(board[i]);
              }
          }
          return arr;
      };

      board.add = (r, c) => {
          takenRows.push(r);
          takenCols.push(c);
          let str = '';
          for (let i = 0; i < n; i++) {
              if (i === c) {
                  str += 'Q';
              } else {
                  str += '.';
              }
          }

          if (str.includes('Q')) {
              board[r] += str;
          } 
      };

      board.checkAvail = (r, c) => {
          let checkAvail={};
          checkAvail.bool = true;

          if (takenCols.includes(c) || c >= n) {
              checkAvail.bool = false;
              checkAvail.reason = 'col';
          }

          if (takenRows.includes(r) || r >= n) {
              checkAvail.bool = false;
              checkAvail.reason = 'row';
          }

          for (let i = 0; i <= r ; i++) {
              if (board[r-i]) {
                  if (board[r-i].indexOf('Q') === c-i) {
                      checkAvail.bool = false;
                      checkAvail.reason = 'diaganal';
                  }

                   if (board[r-i].indexOf('Q') === c+i) {
                      checkAvail.bool = false;
                      checkAvail.reason = 'diaganal';
                  }
              }  
          }
          
          return checkAvail;
      };
      return board;
  };

  const loop = (row, col, board) => {
      if (row < n) {
          let check = board.checkAvail(row, col, board);
          if (check.bool) {
              board.add(row, col);
              for (let j = 0; j < n; j++) {
                  loop(row, j, board);
                  loop(row+j, 0, board);
              }
          } else {
              for (let i = 0; i < n; i++) {
                  let check = board.checkAvail(row, i)
                  if (check.bool) {
                      loop(row, i, board);
                  } 
              }
          }
      } else {
          let finalResults = board.results();
          if (finalResults.length === n) {
              let notExist = true;
              for (let i = 0; i < results.length; i++) {
                  if (results[i].toString() === finalResults.toString()) {
                      notExist = false;
                  }
              }
              if (notExist) {
                  results.push(finalResults);
              }
              
          }
      }
  };

  for (let i = 0; i < n; i++) {
      loop(0, i, createBoard());
  };
  
  return results;
};