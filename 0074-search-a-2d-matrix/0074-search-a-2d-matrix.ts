function searchMatrix(matrix: number[][], target: number): boolean {
    

    let cols = matrix[0].length;
    let rows = matrix.length;
    let top = 0, bottom = rows - 1;
    let row; // 用来存储目标行

    // Binary search to find the target row
    while (top <= bottom) {
        row = Math.floor((top + bottom) / 2); // 直接存储 midrow
        if (target > matrix[row][cols - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row - 1;
        } else {
            break; // 找到目标行，直接跳出
        }
    }

    // 如果没有找到目标行，返回 false
    if (top > bottom) {
        return false;
    }

    // 在目标行进行二分查找
    let left = 0, right = cols - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};