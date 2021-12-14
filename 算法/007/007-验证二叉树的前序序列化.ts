
/**
 * @todo https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree
 * @param {string} preorder
 * @return {boolean}
 */
function isValidSerialization(preorder: string): boolean {
  let ret:any[] = [],arr:any[] = preorder.split(',')
  for(let i = 0; i< arr.length; i++) {
      ret.push(arr[i])
      while(ret.length >= 3 && ret[ret.length-3] !== '#' && ret[ret.length-1] === '#' && ret[ret.length-2] === '#'){
          ret.pop()
          ret.pop()
          ret.pop()
          ret.push('#')
      }
  }
  if(ret.length === 1 && ret[0] === '#'){
      return true
  }
  return false
};