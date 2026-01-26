function zigzagTraversal(grid: number[][]): number[] {
 
    let result = [];
    let height = grid.length;
    let width = grid[0].length;

    let px = 0, py = 0;
    let parity = 0;

    while (py < height) {
        let value = grid[py][px];

        if (parity === 0) {
            result.push(value);
        }

        parity = (parity + 1) % 2;

        // 偶数行 → 向右
        if (py % 2 === 0) {
            px += 1;
        }  else {
            px -= 1;
        }

        // 撞到右边界
        if (px >= width) {
            px -= 1;
            py += 1;
        } else if (px < 0) {
            px += 1;
            py += 1;
        }
    }

    return result;
};
