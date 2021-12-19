/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if(!head || !head.next) return null

  let slow = head.next, fast = head.next.next
  while(fast){
      if(fast !== slow){
          if(!fast.next){
              return null
          }
          slow = slow.next
          fast = fast.next.next
      }else{
          fast = head
          while(fast !== slow){
              fast = fast.next
              slow = slow.next
          }
          return fast
      }
  }
  return null
};