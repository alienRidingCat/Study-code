/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
  if(!head) return null
  // 创建两个指针
  let cur = head, cur1
  // 遍历整个链表，复制每个节点及其值，然后拼接到原节点的后面
  while(cur){
      cur1 = new Node(cur.val, cur.next, cur.random)
      cur.next = cur1
      cur = cur1.next
  }
  // 找到一个克隆节点，修正random，将克隆节点的random指向克隆节点
  cur = head.next
  while(cur){
      cur.random && (cur.random = cur.random.next)
      cur = cur.next && cur.next.next
  }
  // 拆分链表分成原链表和克隆链表
  cur = cur1 = head.next
  while(cur1.next){
      head.next = head.next.next
      cur1.next = cur1.next.next
      head = head.next
      cur1 = cur1.next
  }
  head.next = null
  return cur
};