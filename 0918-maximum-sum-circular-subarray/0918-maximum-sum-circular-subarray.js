/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globeMax = nums[0]
    let globeMin = nums[0]
    let curMax = 0, curMin = 0
    let total = 0
    for(n of nums){
        curMax = Math.max(curMax + n, n)
        curMin = Math.min(curMin+n, n)
        total += n
        globeMax = Math.max(globeMax, curMax)
        globeMin = Math.min(globeMin, curMin)
    }
    if(globeMax > 0){
    return Math.max(globeMax, total - globeMin)
    }else{
        return globeMax
    }
};