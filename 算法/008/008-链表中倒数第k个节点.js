/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @todo 剑指 Offer 22. 链表中倒数第k个节点
 * @description 
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

  例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {

  let reverseHead = reverseListNode(head)
  if (reverseHead && !reverseHead.next && k === 1) return reverseHead
  let cur = new ListNode(reverseHead.val)
  let pre = cur
  while (k - 1 > 0) {
    cur.next = new ListNode(reverseHead.next.val)
    reverseHead = reverseHead.next
    cur = cur.next
    k--
  }
  return reverseListNode(pre)
};
function reverseListNode(head) {
  if (head && !head.next) return head
  let pre = null, cur = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}