class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        
     string ans;
        int n = word1.length(), m = word2.length();
        for (int i = 0; i < n || i < m; i++) {
            if (i < n) {
                ans += word1[i];
            }
            if (i < m) {
                ans += word2[i];
            }
        }
        return ans;
    }
};

