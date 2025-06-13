class Solution {
    public String removeTrailingZeros(String num) {
         int len = num.length();
        while (len > 0 && num.charAt(len - 1) == '0') {
            len--;
        }
        return num.substring(0, len);

    }
}