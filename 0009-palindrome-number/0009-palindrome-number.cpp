class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0){ 
            return false;
            }else{

        string s = to_string(x);
        return helper(s);
    }
    }
    private:
    bool helper(const string& s) {
          if (s.length() <= 1)
   {
      return true;
   }
if (s[0] != s[s.length() - 1]) {
            return false;
        }
 
   string sub = s.substr(1, s.length() - 2);
   return helper(sub);
    }


};