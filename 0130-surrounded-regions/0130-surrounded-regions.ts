/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 
const ROWS = board.length;
    const COLS = board[0].length;
    const dfs = (row,col) => {
//base case 
    if(row < 0 || col < 0 || row == ROWS || col == COLS|| board[row][col] != "O"){
        return
    }
          
        // Mark as temporary 'T' (not surrounded)
    //change 
    board[row][col] = "T";
    //4 adjacent directions
    dfs(row+1, col);
      dfs(row-1, col);
        dfs(row, col+1);
          dfs(row, col-1);//capture only the "O"
             // Explore 4-directionally
    }
     // Step 1: Mark unsurrounded 'O's (on borders) as 'T'
    //   遍历棋盘的所有边界上的 'O'，并通过深度优先搜索（DFS）标记所有与之相连的 'O'，表示这些 'O' 没有被 'X' 完全包围。
    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c ++){
            if(board[r][c] == "O" && (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)){
                dfs(r,c)
            }
        }
    }
        // Step 2: Flip surrounded 'O's to 'X'

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c ++){
            if(board[r][c] == "O"){
                board[r][c]= "X"
            }
        }
    }
     for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c ++){
            if(board[r][c] == "T"){
                board[r][c]= "O"
            }
        }
    }
    
    
};