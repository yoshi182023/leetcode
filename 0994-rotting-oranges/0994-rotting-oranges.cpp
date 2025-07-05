class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        queue<pair<int,int>> rotten;
        int r = grid.size(), c = grid[0].size(), fresh = 0, t = 0;

        // 初始化，统计新鲜橘子数量并记录初始烂橘子位置
        cout << "Initial grid state:\n";
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                cout << grid[i][j] << " ";
                if (grid[i][j] == 2) {
                    rotten.push({i, j});
                    cout << "(rotten) " << i<< j ;
                } else if (grid[i][j] == 1) {
                    fresh++;
                    cout << "(fresh) ";
                }
            }
            cout << endl;
        }

        cout << "\nStart BFS process...\n";

        // BFS，按分钟腐烂橘子
        while (!rotten.empty() && fresh > 0) {
            int num = rotten.size();
            cout << "\nMinute " << t << ": " << num << " rotten oranges to process\n";

            for (int i = 0; i < num; i++) {
                int x = rotten.front().first, y = rotten.front().second;
                rotten.pop();
                cout << "Processing rotten orange at (" << x << ", " << y << ")\n";

                vector<pair<int, int>> directions = {{-1,0},{1,0},{0,-1},{0,1}};
                for (auto dir : directions) {
                    int nx = x + dir.first;
                    int ny = y + dir.second;

                    if (nx >= 0 && nx < r && ny >= 0 && ny < c && grid[nx][ny] == 1) {
                        grid[nx][ny] = 2;
                        fresh--;
                        rotten.push({nx, ny});
                        cout << " -> Fresh orange at (" << nx << ", " << ny << ") becomes rotten. Fresh left: " << fresh << "\n";
                    }
                }
            }
            t++; // 这一轮结束，时间+1
        }

        // 打印结束状态
        cout << "\nFinal grid state after BFS:\n";
        for (const auto& row : grid) {
            for (int cell : row) {
                cout << cell << " ";
            }
            cout << endl;
        }

        cout << "Minutes passed: " << t << "\n";
        if (fresh == 0) {
            cout << "All oranges are rotten.\n";
        } else {
            cout << "Some fresh oranges remain.\n";
        }

        return (fresh == 0) ? t : -1;
    }
};
