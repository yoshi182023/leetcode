function hardestWorker(n: number, logs: number[][]): number {

        let start = 0
        let maxTime = -Infinity
        let ans = Infinity   // 为了处理“时间相同取更小 id”
    for(let [id,log] of logs){
        
        let logtime = log - start 
        start = log
        if(logtime > maxTime || (logtime === maxTime && id < ans)){
            maxTime = logtime
             ans = id
         }
        }

    return ans

};