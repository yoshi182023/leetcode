
class Solution {
    void dfs(vector<vector<int>>& grid, int i, int j, int& perimeter){
        grid[i][j] = 2;  // 把当前的陆地标记为已访问
        if (i == 0 || grid[i - 1][j] == 0) perimeter++; // 上边界或上面是水，就加一条边
        //    最上面那一行，也就是第一行 //grid[i - 1][j] == 0这表示：你上面有格子（不是第一行），但上面那个格子是水（值是 0）
        if(i == grid.size()-1 || grid[i+1][j] == 0) perimeter++; 
        if(j ==0 ||grid[i][j-1] == 0) perimeter++; 
        if (j == grid[0].size() - 1 || grid[i][j + 1] == 0) perimeter++;
        
        if(i > 0 && grid[i-1][j] == 1) dfs(grid,i-1,j,perimeter);//如果上方是陆地，那我们应该去访问它（递归调用 dfs）
        if (i < grid.size()-1 && grid[i+1][j] == 1) dfs(grid, i+1, j, perimeter); // 下
        if (j > 0 && grid[i][j-1] == 1) dfs(grid, i, j-1, perimeter); // 左
        if (j <grid[0].size()-1  && grid[i][j+1] == 1) dfs(grid, i, j+1, perimeter); // 右  
    }
    
    
    
    
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int perimeter = 0;
        int r = grid.size(), c = grid[0].size();
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (grid[i][j] == 1) {
                    dfs(grid, i, j, perimeter);
                    return perimeter;  // 一个岛屿只需要计算一次
                }
            }
        }
        return 0;
    }
};
