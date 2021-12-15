/**
 * @todo 227. 基本计算器 II
 * @description
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
    整数除法仅保留整数部分。
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
  let l = s.trim()
  let num = '', stack = [], symbolArr = ['+', '-', '*', '/'], retArr = []
  for (let i = 0; i < l.trim().length; i++) {
    if (l[i] === ' ') {
      continue
    }
    if (!symbolArr.includes(l[i])) {
      num += l[i]
      if (i === l.length - 1) {
        let n = Number(num)
        retArr.push(n)
        num = ''
        while (stack.length) {

          retArr = cacl(stack, retArr)
        }
      }

    } else {
      let n = Number(num)
      retArr.push(n)

      while (stack.length) {

        retArr = cacl(stack, retArr)
      }

      stack.push(l[i])
      num = ''

    }
  }
  return retArr.reduce((a, b) => a + b, 0)
}
function cacl(stack, retArr) {
  let right = retArr.pop()
  let left = retArr.pop()
  let symbor = stack[stack.length - 1]
  let ret = 0
  // 计算
  switch (symbor) {
    case "*":
      ret = left * right
      break
    case '/':
      ret = parseInt(left / right)
      break
    case '+':
      retArr.push(left)
      ret = right
      break
    case '-':
      retArr.push(left)
      ret = -right
      break
  }
  stack.pop()
  retArr.push(ret)
  return retArr
}
