class Solution {
    public boolean isPowerOfFour(int n) {
         public boolean isPowerOfFour(int num) {
        //负数不可能是4的幂
        if (num <= 0)
            return false;
        //1也是4的幂
        if (num == 1)
            return true;
        //如果不能够被4整除，肯定不是4的幂
        if (num % 4 != 0)
            return false;
        //如果能被4整除，除以4然后递归调用
        return isPowerOfFour(num / 4);
    }

    }