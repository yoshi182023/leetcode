function minDistance(word1: string, word2: string): number {

    const m = word1.length 
    const n = word2.length 
    const dp = Array(m+1).fill(0).map(()=> Array(n+1).fill(0))
    for(let i = 0; i<= m; i++){
        dp[i][0] = i
    }
      for(let j = 0; j<= n; j++){
        dp[0][j] = j
    }
    //check if the letters are equal 
    //if they are just gonna copy paste the previous answer 
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
        if(word1[i-1] === word2[j-1]){
            dp[i][j] = dp[i-1][j-1]
        }else{
            dp[i][j] = 1 + Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
        }

}
    }
    //if not we are going to get the minimum operation 
    //in the previous round  and +1 
    return dp[m][n]
};;