/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
 // 初始化最小移动次数为无穷大，用于后续比较
    let minMoves = Infinity;
    // 定义DFS递归函数，cur表示当前处理的位置索引(0-8)，moves表示当前累计移动次数
    const dfs = (cur, moves) => {
        // 剪枝优化：如果当前累计移动次数已经大于等于已知的最小移动次数，直接返回
        // 因为继续递归也不可能得到更优解，避免不必要的计算
        if (moves >= minMoves) return;
        // 终止条件：当cur等于9时，说明已经处理完所有9个网格位置(0-8)
        // 更新最小移动次数并返回
        if (cur === 9) {
            minMoves = Math.min(minMoves, moves);
            return;
        }
        // 将一维索引cur转换为二维网格坐标(i, j)
        // i = cur / 3 取整得到行号，j = cur % 3 得到列号
        let i = Math.floor(cur / 3);
        let j = cur % 3;
        
        // 如果当前位置(i,j)已经有石头(不为0)，则不需要移动石头到这里
        // 直接递归处理下一个位置，移动次数保持不变
        if (grid[i][j] !== 0) {
            dfs(cur + 1, moves);
            return;  // 返回，避免执行后面的代码
        }
        // 双重循环遍历网格中所有可能提供石头的位置(x,y)
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                // 跳过不能提供石头的位置：石头数量小于等于1的位置无法提供石头
                if (grid[x][y] <= 1) continue;
                // 移动石头：从位置(x,y)移动一个石头到位置(i,j)
                grid[x][y] -= 1;  // 提供位置石头数量减少
                grid[i][j] += 1;  // 接收位置石头数量增加
                
                // 计算移动成本：使用曼哈顿距离(|Δx| + |Δy|)
                const cost = Math.abs(x - i) + Math.abs(y - j);
                // 递归处理下一个位置，累计移动次数加上本次移动的成本
                dfs(cur + 1, moves + cost);
                
                // 回溯：恢复grid状态，撤销刚才的移动操作
                // 这是DFS回溯算法的关键步骤，确保尝试所有可能性
                grid[x][y] += 1;
                grid[i][j] -= 1;
            }
        }
    };
    
    // 从第一个位置(索引0)开始DFS搜索，初始移动次数为0
    dfs(0, 0);
    
    // 返回找到的最小移动次数
    return minMoves;
};
