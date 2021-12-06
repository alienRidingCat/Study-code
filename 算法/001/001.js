const { ListNode } = require('../util')

/**
 * @todo 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
          你应当 保留 两个分区中每个节点的初始相对位置。
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  if (!head || head.val === null) return null

  let left = new ListNode(), right = new ListNode(), l = left, r = right

  while (head != null) {
    if (head.val < x) {
      left.next = head
      left = left.next
    } else {
      right.next = head
      right = right.next
    }
    head = head.next
  }
  left.next = r.next
  right.next = null
  return l.next
};

module.exports = partition