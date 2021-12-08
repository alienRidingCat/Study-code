/**
 * @todo 844. 比较含退格的字符串
 * @description 
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。

  如果相等，返回 true ；否则，返回 false 。

  注意：如果对空文本输入退格字符，文本继续为空。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/backspace-string-compare
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  return getString(s)===getString(t)  
};

function getString(s){
  let str = ''
  if(!s.length){
      return ''
  }
  if(s.length === 1){
      if(s[0]==='#') return ''
      return s[0]
  }
  for(let i = 0;i<s.length;i++){
      if(s[i] === '#'){
          str = str.slice(0,-1)
      }else{
          str+=s[i]
      }
  }
  return str
}



/**
 * @todo 682. 棒球比赛
 * @description 
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。

    比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：

    整数 x - 表示本回合新获得分数 x
    "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
    "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
    "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
    请你返回记录中所有得分的总和

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/baseball-game
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  if(!ops.length) return 0
  if(ops.length === 1) return ops[0]
  
  let resultArr = []
  for(let o of ops){
      switch(o){
          case '+':
              resultArr.push(resultArr[resultArr.length-2]*1+resultArr[resultArr.length-1]*1)     
              break
          case 'D':
              resultArr.push(resultArr[resultArr.length-1]*2)
              break
          case 'C':
              resultArr.pop()
              break
          default:
              resultArr.push(o)
              break
      }
  }
  return resultArr.reduce((a,b)=>{
      return a*1+b*1
  }, 0)
};



