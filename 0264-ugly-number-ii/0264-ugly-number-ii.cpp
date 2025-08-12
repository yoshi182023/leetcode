class Solution {
public:
    int nthUglyNumber(int n) {
     priority_queue<long, vector<long>, greater<long>> pq; // 最小堆
        //小顶堆
        pq.push(1);
        for(int t=0; t < n; t++){
            long cur = pq.top(); // 取出当前最小丑数
            pq.pop();       // 移除堆顶
 // 跳过重复值
            while (!pq.empty() && pq.top() == cur) {
                pq.pop();
            }
            // 生成新丑数
            pq.push(cur * 2);
            pq.push(cur * 3);
            pq.push(cur * 5);
            // 如果是第 n 次循环，返回当前丑数
            if (t == n - 1) {
                return cur;
            }
        }
        return -1; // 理论上不会执行到这里
    }
};