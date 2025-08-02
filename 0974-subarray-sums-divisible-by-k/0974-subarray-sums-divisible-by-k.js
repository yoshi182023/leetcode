/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let runningSum = count = 0
    let remainders = {0:1}
 
for (let num of nums) {
        runningSum += num;
        let remainder = runningSum % k;
        // 调整负数为正余数
        if (remainder < 0) remainder += k;
        // 如果当前余数已存在，则增加 count
        if (remainders[remainder]) {
            count += remainders[remainder];
        }
        // 更新余数的出现次数
        remainders[remainder] = (remainders[remainder] || 0) + 1;
    }
    return count;
};