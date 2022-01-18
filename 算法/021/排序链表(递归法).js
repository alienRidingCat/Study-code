/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (66.62%)
 * Likes:    1435
 * Dislikes: 0
 * Total Accepted:    238.6K
 * Total Submissions: 358.1K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head

  // 找到中点 midNode 后，执行 midNode.next = null 将链表切断。
  // 递归分割时，输入当前链表左端点 head 和中心节点 midNode 的下一个节点 rightHead(因为链表是从 midNode 切断的)。
  let midNode = getMiddleNode(head)
  let rightHead = midNode.next
  midNode.next = null

  // 合并 merge 环节： 将两个排序链表合并，转化为一个排序链表。
  // 时间复杂度 O(l + r)，l, r 分别代表两个链表长度。

  // 设置两指针 left, right 分别指向两链表头部
  let left = sortList(head)
  let right = sortList(rightHead)

  return mergeTwoLists(left, right)

};
// 找到链表中间节点
function getMiddleNode(head) {
  // 分割 cut 环节： 找到当前链表中点，并从中点将链表断开（以便在下次递归 cut 时，链表片段拥有正确边界）；
  // 我们使用 fast,slow 快慢双指针法
  let fast = head.next, slow = head
  // 奇数个节点找到中点，偶数个节点找到中心左边的节点。
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  // fast 走两步，slow走一步，fast走完时，slow在中点
  return slow
}
// 合并两个有序链表
function mergeTwoLists(left, right) {
  // 双指针法合并，建立辅助ListNode newHead 作为头部。
  let newHead = new ListNode()
  let ret = newHead

  // 比较两指针处节点值大小，由小到大加入合并链表头部，指针交替前进，直至添加完两个链表。
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      newHead.next = left
      left = left.next
    } else {
      newHead.next = right
      right = right.next
    }
    newHead = newHead.next
  }
  newHead.next = left !== null ? left : right
  // 返回辅助ListNode newHead 作为头部的下个节点 newHead.next。
  return ret.next
}
// @lc code=end

