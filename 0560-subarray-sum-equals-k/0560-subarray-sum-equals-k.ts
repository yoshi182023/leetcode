function subarraySum(nums: number[], k: number): number {
    let res = 0 
    //结果，记录总共有多少个子数组的和等于 k；
    let currSum = 0
    //当前从头到当前元素的前缀和
    //hashmap 
    const prefixSum = new Map()//某个前缀和 sum 出现了多少次。
    prefixSum.set(0,1)
    //empty prefix has a sum of 0
    //base case of 0, single prefix sum sums up to 0
  //一个空的子数组，它的和是 0，我们默认它出现过一次。
    for(let n of nums){
        currSum += n
        //更新前缀和。此时 currSum 表示从开头到当前元素的和。
        let diff = currSum - k//我们要找的是：有没有某个之前的前缀和 prevSum，使得
        if(prefixSum.has(diff)){
            //如果之前出现过这个差值（currSum - k），那么就说明存在一个或多个连续子数组，它们的和等于 k，我们就把这些情况加到结果中。
        res += prefixSum.get(diff)
        }
       prefixSum.set(currSum, (prefixSum.get(currSum)||0) +1)
       //这是 JavaScript 中一个简洁的“默认值”写法。
// 如果 .get(currSum) 返回的是一个“假值”比如 undefined，那么就使用 0
        }
    
    return res
};