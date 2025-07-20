/*
1028. Recover a Tree From Preorder Traversal
Hard
Topics
premium lock icon
Companies
Hint
We run a preorder depth-first search (DFS) on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.

If a node has only one child, that child is guaranteed to be the left child.

Given the output traversal of this traversal, recover the tree and return its root.

 

Example 1:


Input: traversal = "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]
Example 2:


Input: traversal = "1-2--3---4-5--6---7"
Output: [1,2,5,3,null,6,null,4,null,7]
Example 3:


Input: traversal = "1-401--349---90--88"
Output: [1,401,null,349,88,90]
 

Constraints:

The number of nodes in the original tree is in the range [1, 1000].
1 <= Node.val <= 109
*/

// https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/?envType=daily-question&envId=2025-07-19

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function recoverFromPreorder(traversal: string): TreeNode | null {
  let nodesStack: TreeNode[] = [];
  let currentDepth = 0;
  let currentValue = 0;

  for (let i = 0; i < traversal.length; ++i) {
      if (traversal[i] === '-') {
          // Increment the depth for every '-' character encountered
          currentDepth++;
      } else {
          // Calculate the node's value
          currentValue = 10 * currentValue + parseInt(traversal[i]);
      }

      // Check for end of number or end of string
      if (i + 1 === traversal.length || (traversal[i] !== '-' && traversal[i + 1] === '-')) {
          let newNode = new TreeNode(currentValue);

          // If the stack size is greater than the current depth, pop until the sizes match
          while (nodesStack.length > currentDepth) {
              nodesStack.pop();
          }

          // If stack is not empty, assign the newNode to the appropriate child of the top node
          if (nodesStack.length > 0) {
              if (nodesStack[nodesStack.length - 1].left === null) {
                  nodesStack[nodesStack.length - 1].left = newNode;
              } else {
                  nodesStack[nodesStack.length - 1].right = newNode;
              }
          }

          // Push the new node onto the stack
          nodesStack.push(newNode);

          // Reset current depth and value for the next node
          currentDepth = 0;
          currentValue = 0;
      }
  }

  // We return the root of the binary tree which the stack should now contain
  return nodesStack.length > 0 ? nodesStack[0] : null;
}