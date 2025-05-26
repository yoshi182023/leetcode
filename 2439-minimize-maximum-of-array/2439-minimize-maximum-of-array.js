/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let result = nums[0]
    let total = nums[0]
    for(let i=1; i< nums.length;i++){
        total += nums[i]
        result= Math.ceil( Math.max(result, total/(i+1)))//divded by the length
  
    }
    return result
};