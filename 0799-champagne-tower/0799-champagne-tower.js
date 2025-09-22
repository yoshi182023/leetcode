/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    //最开始的第0行
    let prev = [poured] //flow through
    //遍历每一行
    for(let r = 1; r <= query_row; r ++){
        let curRow = new Array(r+1).fill(0)
        
        //新的一行的杯子会比上一行+1
        //模拟这一行的所有杯子
        for(let i =0; i< r; i++){
            let extra = prev[i] -1
            if(extra > 0){
                curRow[i] += 0.5 * extra
                   curRow[i+1] += 0.5 * extra
            }
        }
          prev = curRow   
          console.log("cur", curRow)
    }
    console.log("prev",prev)
 
    return Math.min(1,prev[query_glass])
};