/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 
     //初始化
        //dp[0][0] = 0;
        let buy1 = -prices[0];//手头上初始现金是0
        let sell1 = 0; //第一次不持有，卖出 当天买卖 现金为0
        let buy2 = -prices[0];//第二次买入
        let sell2 = 0; //第二次卖出后是多少
        for(let i = 1; i <prices.length; i++){
            //0我们已经初始化过了
            //用 状态压缩 优化 DP
            buy1 = Math.max(buy1,-prices[i])
//Math.max(buy1, -prices[i]) 意思是：
// 要么保持之前买入的结果
// 要么选择在第 i 天买入（花掉 prices[i]），利润 = -prices[i]
            //进行第 1 笔交易时，持有股票后的最大利润
            sell1 = Math.max(sell1, buy1+prices[i])
            //完成第 1 笔交易（即卖出后），手里没有股票时的最大利润
            buy2 = Math.max(buy2, sell1-prices[i])
//如果在第 i 天再买一次，利润就是 sell1 - prices[i]。
//buy2 记录的是第 2 次持股时的最大利润。
            sell2 = Math.max(sell2, buy2 + prices[i])
            //如果你在第 i 天把第 2 笔交易卖掉，利润就是 buy2 + prices[i]。
        }
        return sell2
        //其实第二次卖出就已经包含第一次卖出的值了
        //所以第二次卖出一定是最大值

//  sell2 本身已经 包含了第一笔交易的利润（因为在做第二次买入之前，必须先有过一次卖出）。
// 所以 sell2 不是单纯的“第二笔交易利润”，而是 两笔交易加起来的总利润。
    

};