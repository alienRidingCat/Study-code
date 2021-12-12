/**
 * @description
 * 给你一个由 '('、')' 和小写字母组成的字符串 s。

你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

请返回任意一个合法字符串。

有效「括号字符串」应当符合以下 任意一条 要求：

空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
  let ret = [...s]
  let stack = []
  for(let i = 0; i < s.length; i++) {
      if(ret[i]==='(') {
          stack.push(i)
      }
      if(ret[i]===')') {
          if(stack.length) {
              stack.pop()
          }else{
              ret[i]=''
          }
      }
  }
  for(let i = 0; i< stack.length; i++){
      ret[stack[i]] = ''
      // stack.pop()
  }
  return ret.join('')
}