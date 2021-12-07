const { ListNode } = require('../util')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @todo 给你一个链表的头节点 head ，判断链表中是否有环。
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head) return false
  if (head && !head.next) return false

  let pre = head, next = head.next

  while (next && next.next !== null) {
    pre = pre.next
    next = next.next.next

    if (pre === next) {
      return true
    }

  }
  return false
};




/**
 * @todo 找出环形链表节点
 * @param {ListNode} head
 * @return {ListNode}
 */
 const detectCycle = function(head) {
  if(!head) return null
  if(head && !head.next) return null

  let slow = head.next, // 一次走一步
      fast = head.next.next // 一次走两步 

  while(fast){
      if(fast !== slow){
          if(!fast.next){
              return null // 没有环
          }
          slow = slow.next // 一次走一步
          fast = fast.next.next // 一次走两步 
      }else{
          let cur = head
          // 找第二次相遇点
          while(cur !== slow){
              slow = slow.next
              cur = cur.next
          }
          return cur
      }

  }
  return null
};