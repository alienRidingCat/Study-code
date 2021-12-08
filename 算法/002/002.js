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



/**
 * @todo 202.快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 true ；不是，则返回 false 。

 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  if(n <= 0 ) return false
  let numSet = new Set()
  let num = n
  while(true){
      let sum = getSum(num)
      if(sum === 1) return true
      if(numSet.has(sum)){
          return false
      }else{
          numSet.add(sum)
      }
      num =sum
  }

};
function getSum(num){
  let numArr=[...num.toString()]
  let sum = numArr.reduce((a,b)=>{
      return (a*1) + (b*1)*(b*1)
  },0)
  return sum
}