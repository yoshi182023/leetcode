function change(amount: number, coins: number[]): number {
       const dp = new Array(amount + 1).fill(0);
    const valid = new Array(amount + 1).fill(false);
    dp[0] = 1;
    valid[0] = true;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            valid[i] |= valid[i - coin];
        }
    }
    if (!valid[amount]) return 0;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
