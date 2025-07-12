/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = null; 
    const dfs = (node) =>{
        if (node === null) return false; 

        let left = dfs(node.left)
            let right = dfs(node.right);
        let cur = node === p || node === q; 
        //if cur 表示当前节点是否就是 p 或 q，是的话为 true。

        if(left + right + cur >= 2) result = node;
        //它们加起来就是转换成数字后求和：
// true + true = 2
// true + true + true = 3
        return left || right || cur;

    }
    dfs(root);
    return result;
};