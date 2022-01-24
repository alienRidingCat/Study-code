/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let ret = []
  ret.push(intervals[0])

  for(let i = 1; i < intervals.length; i++){
      const cur = intervals[i]
      // 获取ret中最后一个区间
      const last = ret[ret.length -1]
      
      if(last[0]<=cur[0] && last[1]>=cur[1]){
          // 当前区间 cur 被 ret中最后一段区间覆盖，直接舍弃
          continue
      }else if(last[0] >= cur[0] && last[1] <= cur[1]){
          // 当前区间 cur覆盖了 ret中最后一段区间，舍弃 ret中最后一段区间，并保留 cur
          ret.pop()
          ret.push(cur)
      }else{
          // 当前区间 和 ret中最后一段区间  互不覆盖，都会被保留
          ret.push(cur)
      }
      
  }
  return ret.length
};