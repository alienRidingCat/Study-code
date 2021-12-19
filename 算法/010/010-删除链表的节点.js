

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @todo
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) return null
  if (head.val === val && !head.next) return null
  let cur = head,ret = cur
  while (cur && cur.next) {
    let next = cur.next
    if (cur.val === val) return next
    if (next.val === val) {
      cur.next = next.next
      next.next = null
    }
    cur = cur.next
  }
  return ret
};