
// 交换位置
function swap(heat, index1, index2) {
  [heat[index1], heat[index2]] = [heat[index2], heat[index1]]
}

// 比较两个节点大小
function compare(node1, node2) {
  const diff = node1 - node2
  return diff
}

// 扔一个数据进去，调整成最小堆
function push(heat = [], node) {
  const index = heat.length
  heat.push(node)
  siftUp(heat, node, index)
}

// 1.弹出顶层数据
// 2.调整成最小堆
function pop(heat) {
  const first = heat[0]
  if (first !== undefined) {
    const last = heat.pop()
    if (last !== first) {
      heat[0] = last
      siftDown(heat, last, 0)
    }
  } else {
    return null
  }
}

function siftDown(heat, node, i) {
  let index = i
  let len = heat.length
  while (index < len) {
    const leftIndex = (index + 1) * 2 - 1
    const left = heat[leftIndex]

    const rightIndex = (index + 1) * 2 
    const right = heat[rightIndex]

    if (left !== undefined && compare(left, node) > 0) {
      // 左子节点和根节点相比更小，需要调整

      if (right !== undefined && compare(right, left) > 0) {
        // 右子节点更小
        swap(heat, index, rightIndex)
        index = rightIndex
      } else {
        swap(heat, index, leftIndex)
        index = leftIndex
      }

    } else if (right !== undefined && compare(right, node) > 0) {
      // 右子节点和根节点相比更小，需要调整
      heat[index] = right
      heat[rightIndex] = node
      index = rightIndex
    } else {
      return
    }
  }
}

// 向上筛选
function siftUp(heat, node, index) {
  while (true) {
    // 向右移动
    const parentIndex = (index - 1) >>> 1
    const parent = heat[parentIndex]
    if (parent !== undefined && compare(node, parent) > 0) {
      // 父节点比子节点大
      swap(heat, parentIndex, index)
      index = parentIndex
    } else {
      // 父节点比子节点小
      return
    }
  }
}

// 获取顶层数据
function peek(heat) {
  const first = heat[0]
  return first === undefined ? null : first
}




const a = [3, 2, 1, 5, 6, 4]
push(a, 8)
console.log('a0', a)
// a [
//   { sortIndex: -1 },
//   { sortIndex: 1 },
//   { sortIndex: 0 },
//   { sortIndex: 5 },
//   { sortIndex: 2 },
//   { sortIndex: 4 },
//   { sortIndex: 1 }
// ]
pop(a)
console.log('a1', a)
// a [
//   { sortIndex: 0 },
//   { sortIndex: 1 },
//   { sortIndex: 1 },
//   { sortIndex: 5 },
//   { sortIndex: 2 },
//   { sortIndex: 4 }
// ]
pop(a)
console.log('a2', a)