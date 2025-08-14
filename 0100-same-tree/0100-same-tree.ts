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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false; 
    const queue1 = [p];
    const queue2 = [q];
    while (queue1.length > 0 && queue2.length > 0) {
        const node1 = queue1.shift();
        const node2 = queue2.shift();    

        if (node1.val !== node2.val) return false;    

        const left1 = node1.left, right1 = node1.right;
        const left2 = node2.left, right2 = node2.right;   

        // 检查左子树
        if ((left1 === null && left2 !== null) || 
            (left1 !== null && left2 === null)) return false;
            
        // 检查右子树 - 这是缺少的部分！
        if ((right1 === null && right2 !== null) || 
            (right1 !== null && right2 === null)) return false;
        
        if (left1 !== null) queue1.push(left1);
        if (right1 !== null) queue1.push(right1);
        if (left2 !== null) queue2.push(left2);
        if (right2 !== null) queue2.push(right2);
    }
    
    return queue1.length === 0 && queue2.length === 0;
}