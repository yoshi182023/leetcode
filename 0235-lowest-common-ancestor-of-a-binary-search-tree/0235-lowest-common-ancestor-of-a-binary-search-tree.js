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
    //found within the left side of the tree
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p,q)
        //recusive down the left side

    }else if (p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p,q)
    }else{
        //one on the left one on the right 
        return root
    }
};