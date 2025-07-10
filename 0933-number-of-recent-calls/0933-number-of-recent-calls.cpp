#include <deque>

class RecentCounter {
    std::deque<int> dq;
public:
    RecentCounter() {}
    
    int ping(int t) {
        dq.push_back(t);       // enqueue (入队)
        while (dq.front() < t - 3000) {
            dq.pop_front();    // dequeue (出队)
        }
        return dq.size();
    }
};