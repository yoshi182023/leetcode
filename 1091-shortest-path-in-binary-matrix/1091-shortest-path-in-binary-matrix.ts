function shortestPathBinaryMatrix(grid: number[][]): number {
    if(grid[0][0] === 1) return -1; 
    let directions = [ [-1,-1],
                        [-1,0],
                        [-1,+1],
                         [0,1],
                         [0,-1],
                         [0,+1],
                         [1,1],
                         [1,-1],
                         [1,0]]
    let queue = [[0,0,1]];//initial starting point and count 1
    //[start point, count]
    while(queue.length){
        let [currentX, currentY, count] = queue.shift()
        if(currentX === grid.length-1 && currentY === grid[0].length-1){
            return count;
        }
        for(let [x,y] of directions){
            //create a new x and a new y
            let [nextX, nextY ] =[currentX + x, currentY+y]
            if(nextX < 0 || nextX > grid.length -1|| nextY < 0 || nextY > grid[0].length-1 || grid[nextX][nextY]===1){
                continue
            }
            queue.push([nextX,nextY,count+1])
            grid[nextX][nextY] = 1
        }
    }
    return -1 
};