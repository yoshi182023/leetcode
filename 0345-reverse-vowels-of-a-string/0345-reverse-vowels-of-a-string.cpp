class Solution {
public:
    string reverseVowels(string s) {
    // 定义元音字母集合（包含大小写）
        const unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        
        int left = 0;
        int right = s.size() - 1;
        
        while (left < right) {
            // 从左向右找到第一个元音字母
            while (left < right && !vowels.contains(s[left])) {
                left++;
            }
            
            // 从右向左找到第一个元音字母
            while (left < right && !vowels.contains(s[right])) {
                right--;
            }
            
            // 交换两个元音字母
            if (left < right) {
                swap(s[left], s[right]);
                left++;
                right--;
            }
        }
        
        return s;
    }
};