/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 中序遍历
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  function dfs(node) {
      if(!node) return 0;
      const right = dfs(node.right);
      if(0 === --k){
          return node.val;
      }
      const left = dfs(node.left);
      return right+left
  }
  return dfs(root);
};
