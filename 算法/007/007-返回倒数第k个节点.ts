
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

 function kthToLast(head: ListNode | null, k: number): number {
  if(k<=0) return null
  let pre:ListNode | null = null, cur: ListNode | null = head
  while(cur){
      let next: ListNode | null = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  let ret = pre
  while(k-1>0){
      ret = ret.next
      k--
  }
  return ret.val
};