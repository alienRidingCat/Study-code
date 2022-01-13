/**
 * @description 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let numsMap = new Map()
  for(let num of nums){
      if(numsMap.has(num)){
          numsMap.set(num,numsMap.get(num)+1)
      }else{
          numsMap.set(num,1)
      }
  }
  
  let ret = [...numsMap.entries()]
  ret.sort((a, b) => b[1] - a[1])
  return ret.splice(0,k).map(i=>i[0])
};