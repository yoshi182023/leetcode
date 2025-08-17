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

var buildTree = function(preorder, inorder) {
    // 定义递归函数，参数是当前子树在前序和中序数组中的范围
    function recuse(preStart, preEnd, inStart, inEnd) {
        // base case: 当范围无效时返回null
        if(preStart > preEnd || inStart > inEnd) return null; 
        
        // 前序遍历的第一个元素就是当前子树的根节点
        let rootVal = preorder[preStart]
        
        // 在中序遍历数组中找到根节点的位置
        let inorderindex = inorder.indexOf(rootVal);
        console.log("index",inorderindex)
        
        // 计算左子树的节点数量
        let nleft = inorderindex - inStart
        console.log(nleft)
        
        // 创建当前根节点
        let root = new TreeNode(rootVal)
        
        // 递归构建左子树
        // 前序范围: preStart+1 到 preStart+nleft (跳过根节点，取左子树数量的节点)
        // 中序范围: inStart 到 inorderindex-1 (根节点左边的所有节点)
        root.left = recuse(preStart+1, preStart+nleft, inStart, inorderindex-1)
        
        // 递归构建右子树
        // 前序范围: preStart+1+nleft 到 preEnd (左子树之后的所有节点)
        // 中序范围: inorderindex+1 到 inEnd (根节点右边的所有节点)
        root.right = recuse(preStart+1+nleft, preEnd, inorderindex+1, inEnd)
        
        return root;
    }

    // 初始调用递归函数，处理整个数组范围
    return recuse(0, preorder.length-1, 0, inorder.length-1)
};