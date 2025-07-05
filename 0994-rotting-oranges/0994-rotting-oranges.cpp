class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        //row and column number cordinates 
        
        queue<pair<int,int>> rotten;  // 存储当前腐烂橘子的坐标
        int r = grid.size();          // 行数
        int c = grid[0].size();       // 列数
        int fresh = 0;                // 新鲜橘子的数量
        int t = 0;                    // 经过的时间（分钟）
        for(int i = 0; i < r; i++) {
            for(int j = 0; j < c; j++) {
                if(grid[i][j] == 2)
                    rotten.push({i, j});   // 找到腐烂的橘子，入队
                else if(grid[i][j] == 1)
                    fresh++;               // 统计新鲜橘子数量
            }
        }
        
        while (!rotten.empty() && fresh > 0) {
            t++;  // \U0001f552 每进一次 while 就表示又过了一分钟
            int num = rotten.size();  // 当前这一分钟要处理多少腐烂橘子
            
            
            for (int i = 0; i < num; i++) {
                int x = rotten.front().first, y = rotten.front().second;
                rotten.pop();  // 当前腐烂橘子出队
                
                // 上
                if (x > 0 && grid[x - 1][y] == 1) {
                    grid[x - 1][y] = 2;     // 变腐烂
                    fresh--;               // 新鲜橘子 -1
                    rotten.push({x - 1, y});  // 新腐烂橘子入队
                }
                
                // 下
                if (x < r - 1 && grid[x + 1][y] == 1) {
                    grid[x + 1][y] = 2;
                    fresh--;
                    rotten.push({x + 1, y});
                }
                // 左
                if (y > 0 && grid[x][y - 1] == 1) {
                    grid[x][y - 1] = 2;
                    fresh--;
                    rotten.push({x, y - 1});
                }
                // 右
                if (y < c - 1 && grid[x][y + 1] == 1) {
                    grid[x][y + 1] = 2;
                    fresh--;
                    rotten.push({x, y + 1});
                }
            }
        }
        
        // 若最后还有新鲜橘子，说明无法全部腐烂
        return (fresh == 0) ? t : -1;
    }
};