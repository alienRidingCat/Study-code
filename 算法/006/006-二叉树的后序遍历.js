// 递归法
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal1 = function(root) {
  let res = []
  return _postorderTraversal(root, res)
};  


function _postorderTraversal(root, res) {
  if(!root) return res
  _postorderTraversal(root.left, res)
  _postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}


// 迭代法
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal2 = function(root) {
  let stack = [],res = []
  if(root) stack.push(root)
  while(root!==null || stack.length!==0){
      root = stack.pop()
      if(root){
          stack.push(root)
          stack.push(null)

          if(root.right) stack.push(root.right)
          if(root.left) stack.push(root.left)
      }else{
          res.push(stack.pop().val)
      }
  }
  return res
};