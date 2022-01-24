/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (47.64%)
 * Likes:    1277
 * Dislikes: 0
 * Total Accepted:    356.7K
 * Total Submissions: 747.8K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * intervals[i].length == 2
 * 0 i i 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
  let ret = []

  intervals.sort((a, b) => a[0] - b[0])

  ret.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];

    //  获取ret中最后一个区间
    const last = ret[ret.length - 1]
    if (cur[0] <= last[1]) {
      //  当前区间 cur 的最小值 <= 最后一段区间的最大值
      //  此时需要获取 区间 cur 的最大值 与 最后一段区间的最大值  中的最大值作为区间最大值
      last[1] = Math.max(last[1], cur[1])
    } else {
      //  当前区间 cur 的最小值比最后一段区间的最大值要大
      //  说明两段区间之间是断开的,直接保留
      ret.push(cur)
    }

  }

  return ret
};
// @lc code=end

