/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));
    // Fill the transposed matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    
    return transposed;
};