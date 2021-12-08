/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 反转链表
 * @todo 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if(!head) return null
  if(!head.next) return head

  let pre = null,cur = head,next = head.next
  while(next!=null){
      cur.next = pre
      pre = cur
      cur = next
      next = next.next
  }
  cur.next = pre
  return cur
};