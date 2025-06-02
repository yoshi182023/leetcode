function combinationSum4(nums: number[], target: number): number {
     let dp = new Array(target + 1).fill(0);
    dp[0] = 1;  // 初始条件：和为0有1种方法（空集）
    
    for (let total = 1; total <= target; total++) {
        for (let num of nums) {
            if (total - num >= 0) {
                dp[total] += dp[total - num];
            }
        }
    }
    
    return dp[target];

};