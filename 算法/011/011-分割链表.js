
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let cur = head
    let s = new ListNode(null), s1 = s
    let m = new ListNode(null), m1 = m

    while(cur != null){
        if(cur.val < x) {
            s.next = new ListNode(cur.val)
            s = s.next
        }else{
            m.next = new ListNode(cur.val)
            m = m.next
        }
        cur = cur.next
    }
    m.next = null
    s.next = m1.next

    return s1.next
};