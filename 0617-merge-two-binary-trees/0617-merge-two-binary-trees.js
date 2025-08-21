/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function(t1, t2) {
//     if(t1 === null) return t2
//     if(t2 === null) return t1
//     t1.val += t2.val //中
//     t1.left = mergeTrees(t1.left,t2.left)//左
//     t1.right = mergeTrees(t1.right,t2.right)//右
//     return t1
// };
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) return null;
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    
    const newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees(t1.left, t2.left);
    newNode.right = mergeTrees(t1.right, t2.right);
    
    return newNode;
};