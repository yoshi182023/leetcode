/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 import java.util.ArrayList;
import java.util.List;
class Solution {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        if(root1 == null && root2 == null){//base case 
            return true;
        }
        List<Integer> result1 = new ArrayList<>();
        List<Integer> result2 = new ArrayList<>();

        DFS(root1, result1);
        DFS(root2, result2);
        return result1.equals(result2);

        
    }

    private void DFS(TreeNode root, List<Integer> result){
        if(root == null){
            return;
        }
        if(root.left == null && root.right == null){
            result.add(root.val);
        }
        DFS(root.left, result);
                DFS(root.right, result);

    }
}