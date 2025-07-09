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
var findMode = function(root) {
    let result = [];
    let prevNode = root;
    let count = 0; 
    let max = 0; 

    function traverse(node){
        if (node === null) return; 
        traverse(node.left);
        count = prevNode.val === node.val? count+1 : 1;
        prevNode = node;
        if (count === max){
            result.push(node.val)

        } else if ( count > max){
            result = [node.val]
            max = count
        } 
        traverse(node.right)
          }

    traverse(root);
    return result; 
    
};