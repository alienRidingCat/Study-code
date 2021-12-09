/**
 * @todo 621. 任务调度器
 * @description 
 * 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。

    然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

    你需要计算完成所有任务所需要的 最短时间 。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/task-scheduler
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  let arr = Array(26).fill(0) 
  // 记录每个任务出现的次数
  for(let task of tasks){
      arr[task.charCodeAt() - 'A'.charCodeAt()]++
  }
  
  let max = 0
  for(let i = 0; i < 26; i ++){
      // 找到需要执行的任务次最多的任务次数
      max = Math.max(max, arr[i])
  }
  // 此处假设有冷却时间内无任务，因此在最后一轮执行中不需要计算冷却时间
  // max-1   不计算最后一轮
  // n+1  一轮需要的时间
  let ret = (max-1)*(n+1) 
  // 计算加上最后一轮需要的时间
  for(let i = 0; i < 26; i ++){
      if(arr[i]===max){
          ret++
      }
  }
  
  return Math.max(ret,tasks.length)
}
