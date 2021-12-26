/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 递归法
/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder1 = function(root) {
  let res = []
  function traversal (root) {
      if (root !== null) {
          res.push(root.val)
          root.children.forEach(child => traversal(child))
      }
  }
  traversal (root)
  return res

};


// 迭代法
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder2 = function(root) {
    let stack = [], res = []
    if(root === null) return res

    stack.push(root)
    while(stack.length){
        let node = stack.pop()
        res.push(node.val)
        node.children.reverse();
        stack.push(...node.children)
    }
    return res
};

