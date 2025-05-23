/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let final = 0
    for(let i =0; i < nums.length; i++){
        let sum = 0
        let start = Math.max(0,i-nums[i]);
      
        for(let j=start; j<=i;j++){
        sum += nums[j]
        }
        console.log("sum", sum)
        final +=sum
    }
    return final
};