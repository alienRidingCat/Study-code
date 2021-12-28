/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const x of nums) {
    this.add(x);
  }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  this.heap.offer(val);
  if (this.heap.size() > this.k) {
    this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  //
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }
  /**
   * 抛出第一个元素，并重新排序，使得剩下的元素中第一个任然最小
   * @returns 
   */
  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1; // (index - 1) / 2
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      // 初始下标index
      let findIndex = index;
      // 如果第 leftIndex 位值小于第 index 位值，则移动下标到 leftIndex
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      // 如果第 rightIndex 位值小于第 findIndex 位值，则移动下标到 rightIndex
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      // 此时 findIndex 可能为 index、leftIndex、rightIndex，且第 findIndex 位值较小
      if (index !== findIndex) {
        // 交换index与findIndex下标位的值，并移动下标到findIndex
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
    return this.data.length;
  }
}


/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/