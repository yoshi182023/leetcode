class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>>result;
        vector<int> temp;
        dfs(nums,0,temp,result);
        return result;
    }


    void dfs(vector<int>& nums,int path, vector<int>& temp,vector<vector<int>>& result ){
    //搜索路径的长度 
    //临时的子集
    //结果数组
    if(path == nums.size()){
        result.push_back(temp);
        return;
    }
    temp.push_back(nums[path]);
    dfs(nums,path+1,temp,result);
    temp.pop_back();
    dfs(nums,path+1,temp,result);
    }
};