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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
          vector<vector<int>> result;
               if (!root) return result;
                       queue<TreeNode*> q;
  q.push(root);
        int depth = 0;
              while (!q.empty()) {
            int levelSize = q.size();
            vector<int> level;
         for (int i = 0; i < levelSize; i++) {
                TreeNode* current = q.front();
                q.pop();

                if (current->left) q.push(current->left);
                if (current->right) q.push(current->right);

                if (depth % 2 == 0) {
                    level.push_back(current->val); // 从左到右
                } else {
                    level.insert(level.begin(), current->val); // 从右到左
                }
            }

            result.push_back(level);
            depth++;
        }

        return result;
    }
};
    
