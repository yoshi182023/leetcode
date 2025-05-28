class Solution {
public:
    vector<int> transformArray(vector<int>& nums) {
     

        vector<int> ans;
        for(int i=0;i<nums.size();i++){
            ans.push_back(nums[i]%2);
        }
        sort(ans.begin(),ans.end());
        return ans;
    }
};

