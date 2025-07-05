var nearestExit = function(maze, entrance) {
    let m = maze.length, n = maze[0].length;
    if(m == 0 && n == 0) return -1;

    let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    let queue = [];
    queue.push([entrance, 0]); // [position, steps]
    maze[entrance[0]][entrance[1]] = '+';

    while(queue.length) {
        let [position, steps] = queue.shift();
        let [x, y] = position;

        for(let [dx, dy] of dirs) {
            let i = x + dx;
            let j = y + dy;

            if(i < 0 || i >= m || j < 0 || j >= n || maze[i][j] == '+') continue;

            // 找到出口
            if(i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                return steps + 1;  // 下一步到出口，步数加1
            }

            queue.push([[i, j], steps + 1]);
            maze[i][j] = '+';
        }
    }
    return -1;
};
