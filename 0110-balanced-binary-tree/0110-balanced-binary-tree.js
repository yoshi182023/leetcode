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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true
    function helper(root){
        if(root === null) return 0
        return 1+ Math.max(helper(root.left),helper(root.right))
    }

    if(Math.abs ( helper(root.left)- helper(root.right) ) <2 ){
         return isBalanced(root.left) && isBalanced(root.right)
    }
    
     return false
     }


 