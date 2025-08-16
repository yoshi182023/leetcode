function generateMatrix(n: number): number[][] {
 
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(Array(n).fill(0));
     }
     console.log(matrix)
     let left = 0, right = n -1
     let top = 0, bottom = n -1
    let value = 1
    while(left <= right && top <= bottom) {
        //fill every value in top row 
        for(let col = left; col <= right;col++){
            matrix[top][col] = value
            value+=1
        }
        top++
        //fill every value in right col
        for(let r = top; r <= bottom; r++){
            matrix[r][right] = value
            value += 1
        }
        right -=1 
        for(let col = right; col > left-1; col--){
            matrix[bottom][col] = value 
            value+=1;
        }
        bottom -=1;

        //fill every value in bottom row (reverse order)
        //fill every value in the left col (reverse)
          for(let r = bottom; r > top-1; r--){
            matrix[r][left] = value
            value += 1
        }
        left +=1
    }
    return matrix
};