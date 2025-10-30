/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
    let n = 0
    let stack = []
    //iteratively 
    let cur = root //tell us what node we are currently visiting 
 while (cur !== null || stack.length > 0) {
        //traversing our binary tree 
        //while cur is not null
      while (cur) {
    stack.push(cur)
            //keep going left 
            //go through every node in the left subtree before visit the current node 
            console.log("stack",stack)
            
            cur = cur.left 
        }
        cur = stack.pop()
    
        n +=1 
        if (n === k){
            return cur.val
        }
            cur= cur.right
        }
            return -1; // 如果k超出范围
    
};