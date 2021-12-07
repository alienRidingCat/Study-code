// 创建链表
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 数组转链表
function arrayList(ary) {
  if(!ary.length) {
      return null
  }

  var node
  var head = {val: ary[0], next: null}
  var pnode = head  //pnode变量用来保存前一个节点

  for(var i = 1; i < ary.length; i++) {
      node = {val: ary[i], next:null}
      pnode.next = node   //将前一个节点的next指向当前节点
      pnode = node   //将node赋值给pnode
  }

  return head
}

// 链表转数组
function listArray(head) {
  if(!head) {
      return []
  }
  var result = [head.val]
  var restValues = listArray(head.next)
  return result.concat(restValues)
}
const example1 = [0, 8, 1, 3, 4, 5, 7, 2, 4, 3, 2, 5, 2]
console.log(arrayList(example1))
module.exports = { ListNode, arrayList, listArray }