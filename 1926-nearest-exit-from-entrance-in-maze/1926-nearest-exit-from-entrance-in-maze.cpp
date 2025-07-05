#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {
        int m = maze.size();
        if (m == 0) return -1;
        int n = maze[0].size();
        if (n == 0) return -1;

        vector<vector<int>> dirs = {{-1,0}, {1,0}, {0,-1}, {0,1}};
        queue<pair<pair<int,int>, int>> q;  // {{x, y}, steps}

        int startX = entrance[0];
        int startY = entrance[1];

        q.push({{startX, startY}, 0});
        maze[startX][startY] = '+';  // 标记入口为已访问

        while (!q.empty()) {
            auto front = q.front();
            q.pop();

            int x = front.first.first;
            int y = front.first.second;
            int steps = front.second;

            for (auto& dir : dirs) {
                int i = x + dir[0];
                int j = y + dir[1];

                // 越界或已访问，跳过
                if (i < 0 || i >= m || j < 0 || j >= n || maze[i][j] == '+') {
                    continue;
                }

                // 如果是出口（边界且不是入口）
                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                    return steps + 1;  // 下一步到出口，步数加1
                }

                q.push({{i, j}, steps + 1});
                maze[i][j] = '+';  // 标记访问
            }
        }

        return -1;  // 无法找到出口
    }
};
