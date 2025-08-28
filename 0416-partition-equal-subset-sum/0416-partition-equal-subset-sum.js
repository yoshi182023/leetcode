/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalsum = 0;
    //计算数组中所有元素的和 如果和为奇数 则不存在
    for(num of nums){
        totalsum += num
    }
    if(totalsum % 2 !== 0) return false
    let target = totalsum /2
    let dp = new Array(target+1).fill(false)
    dp[0] = true //dp[0]=true表示和为0是可达的（空子集）。
    for(num of nums){
        //保存一遍dp的拷贝
        let copy = dp.slice()
        for(let i =0; i <=target; i++){
            if(dp[i] && i + num <= target){
  //判断转移后的索引是否超过了dp的下标
//对于每个可能的和i，如果i是可达的（dp[i]为true），并且i+num不超过目标值，那么i+num也是可达的。
                copy[i+num] = dp[i]
             
            }
        }
        dp = copy
        if(dp[target]) return true
  
    }
          return dp[target]
};