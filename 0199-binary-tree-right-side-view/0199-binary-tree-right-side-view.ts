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

function rightSideView(root: TreeNode | null): number[] {
    
       let ans = []; //结果数组
        //定义一个队列
        if(!root) return ans; 
 let queue = [ ]; // 初始化队列
        queue.push(root);
    while (queue.length > 0) {

            //获取当前队列的节点数
            let cnt = queue.length;
            //把这一层的节点逐一弹出
            for(let i =0; i< cnt; i++){
             let curr = queue.shift();
       
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
                if(i == cnt -1 ){
                    //到了当前层的最后一个节点 把节点值加入
                    ans.push(curr.val);
                }

            }
        }
return ans;

    }