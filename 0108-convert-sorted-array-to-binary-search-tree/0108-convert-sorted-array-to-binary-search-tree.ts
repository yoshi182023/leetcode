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

function sortedArrayToBST(nums: number[]): TreeNode | null {
     function helper(left, right) {
        if (left > right) {
            return null;
        }
        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        return root;
    }
    return helper(0, nums.length - 1);
};