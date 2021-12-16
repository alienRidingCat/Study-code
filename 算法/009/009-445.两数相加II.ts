  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  let {level: level1, head: rl1} = reserve(l1)
  let {level: level2, head: rl2} = reserve(l2)

  let level: number = Math.max(level1, level2)
  let newListNode: ListNode = new ListNode(0, null), cur:ListNode = newListNode

  while(level){

      let val1: number = rl1 && rl1.val || 0
      let val2: number = rl2 && rl2.val || 0
      let nVal: number = cur.val || 0

      let n1: number = (nVal + val1 + val2) % 10
      let n2: number = Math.floor((nVal + val1 + val2) / 10)

      cur.val = n1
      cur.next = new ListNode(n2, null)
      cur = cur.next

      rl1 = (rl1 && rl1.next) || null
      rl2 = (rl2 && rl2.next) || null

      level--
  }
  let {head: ret} = reserve(newListNode)
  if(ret.val === 0) ret = ret.next
  
  return ret
};

function reserve(head: ListNode): {level: number, head: ListNode | null}{
if(!head) return {level: 0, head: null}

let pre = null, cur: ListNode  = head, con = 0
while(cur){
    let next: ListNode | null = cur.next

    cur.next = pre
    pre = cur
    cur = next
    con++
}
return {level: con, head: pre}
}