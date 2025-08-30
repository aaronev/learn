// 19. Remove Nth Node From End of List
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) {
      return new ListNode().next;
  };  

  let current = head;
  let list = [];

  while (current) {
      list.push(current.val);
      current = current.next;
  };

  let start = 0 !== list.length - n ? 0 : 1;
  let myHead = new ListNode(list[start]);
  let curr = myHead;

  for (let i = start+1; i < list.length; i++) {
      if (i !== list.length - n) {
          curr = curr.next = new ListNode(list[i]);
      }
  };

  return myHead;
};