function maxAreaOfIsland(grid: number[][]): number {
 
    let ROWS = grid.length
    let COLS = grid[0].length
    let maxArea = 0;
    const DFS = (row,col) =>{
        let ans =  0;
        if (row < 0 || col < 0 || row == ROWS || col == COLS || grid[row][col] !== 1) {
            return 0;
        }
        grid[row][col] =0;//mark as visited 
        ans++;
        //explore 4 directions
        ans += DFS(row+1,col)
            ans +=    DFS(row-1,col)
            ans +=    DFS(row,col+1)
            ans +=    DFS(row,col-1)
            
            return ans 
    }
    for(let r = 0; r<ROWS; r++){
        for(let c = 0; c<COLS; c++){
            maxArea = Math.max(maxArea,DFS(r,c))
        }
    }
    return maxArea
};