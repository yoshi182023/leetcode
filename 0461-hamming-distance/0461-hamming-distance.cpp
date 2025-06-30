class Solution {
public:
    int hammingDistance(int x, int y) {
          int xorResult = x ^ y; // 先做异或
    int count = 0;

    // 统计 xorResult 中 1 的个数（即不同位的数量）
    while (xorResult != 0) {
        count += xorResult & 1; // 如果最低位是1，加1
        xorResult >>= 1;        // 右移一位
    }

    return count;
}
    
};