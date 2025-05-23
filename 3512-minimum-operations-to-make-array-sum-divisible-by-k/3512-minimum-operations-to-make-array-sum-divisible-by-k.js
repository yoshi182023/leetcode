/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
     let result = 0
    for(let i = 0; i < nums.length; i ++){
       
        result += nums[i] 
    }
        // if(result % k === 0){
        //     return 0
        // }

    return result % k
};