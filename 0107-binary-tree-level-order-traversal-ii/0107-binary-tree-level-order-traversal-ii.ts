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

function levelOrderBottom(root: TreeNode | null): number[][] {

    if(!root) return [];
    const queue = [root];
    const result = []; 
    while(queue.length){
        let levelArr = []
        let levelSize = queue.length
        while(levelSize){
  
            let current = queue.shift()
           
if(current.left) queue.push(current.left)
if(current.right) queue.push(current.right)
levelArr.push(current.val)
levelSize--
        }
        result.push(levelArr)

    }
    return result.reverse()
};