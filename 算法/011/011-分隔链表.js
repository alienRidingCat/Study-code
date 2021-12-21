/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
  let n = 0;
  let cur = head;
  while (cur != null) {
      n++;
      cur = cur.next;
  }
  let p = Math.floor(n / k), q = n % k;

  const parts = new Array(k).fill(null);
  let curr = head;
  for (let i = 0; i < k, curr != null; i++) {
      parts[i] = curr;
      let partSize = p + (i < q ? 1 : 0);
      for (let j = 1; j < partSize; j++) {
          curr = curr.next;
      }
      const next = curr.next;
      curr.next = null;
      curr = next;
  }
  return parts;
}