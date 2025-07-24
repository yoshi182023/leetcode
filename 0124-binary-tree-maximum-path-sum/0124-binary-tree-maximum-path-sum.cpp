/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxPathSum(TreeNode* root) {
        //定义一个全局的结果变量 初始化为根结点的值
        int res = root->val;
        //递归的去枚举以所有节点为根结点的合法路径的最大路径和
        dfs(root,res);
        return res;

    }
    int dfs(TreeNode* root, int& res) {//第一个参数：以当前节点为根结点的合法路径
    //第二个参数：全局的最大路径和
    //如果当前节点不为空，递归的计算左子树中合法组合的最大值
    if(!root) return 0;
        int lmax = max(0,dfs(root->left,res));
        int rmax = max(0,dfs(root->right,res));
        res = max(res,lmax+rmax + root->val);
        return root->val +max(lmax,rmax);


    }
};