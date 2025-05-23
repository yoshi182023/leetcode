/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //swap each column with each row
    const n = matrix.length 
    for(let i=0; i < n; i++){
        for (let j = i; j< n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    //reverse each row 
    for(let i=0; i < n;i++){
        matrix[i].reverse()

    }
    
};