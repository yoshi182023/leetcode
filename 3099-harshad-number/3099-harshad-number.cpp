class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int s = 0;
        for (int v = x; v!=0; v /= 10) {
            s += v % 10;
        }
        return x % s ? -1 : s;
    }
};