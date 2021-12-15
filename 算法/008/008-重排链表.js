/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head && !head.next) return head
    let mid = findMid(head)
    let head2 = mid.next
    mid.next = null
    let reverseHead = reverseListNode(head2)

    let ret = head
    let next1 = null, next2 = null
   while(head && reverseHead) {
       next1 = head.next
       next2 = reverseHead.next

       head.next = reverseHead
       head = next1

       reverseHead.next = head
       reverseHead = next2
   }
    console.log(ret)
};

function findMid(head){
    let slow  = head, fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function reverseListNode(head){
    if(head && !head.next) return head
    let pre = null, cur = head
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
} 