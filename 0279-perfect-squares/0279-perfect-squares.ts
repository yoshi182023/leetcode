function numSquares(n: number): number {
 
    const dp = new Array(n+1).fill(n)
    //from 0 to n 
    dp[0]= 0
    //base case is the target value 0 
    //we know target 0 square to get to the target value 
    
        for(let x= 1; x <= n; x++){
            let min = x; 
            let y =1;
            let sq = 1
            while(sq <= x){
                min = Math.min(min,1+dp[x-sq])
                    y++
                    sq = y * y
                }
                dp[x] =min
            }
            return dp[n]
        



};