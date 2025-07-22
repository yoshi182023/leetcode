function maxProduct(nums: number[]): number {
 
 //MAX = + POS * POS OR MIN  -NEGATIVE * - NEGATIVE 
 
    let prevMax = nums[0];
    let prevMin = nums[0]
    let result = nums[0]
    for(let i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], nums[i]*prevMax,nums[i]*prevMin)
        let currMin = Math.min(nums[i], nums[i]*prevMax,nums[i]*prevMin)
        prevMax = currMax
        prevMin = currMin
// 负责在整个遍历过程中持续跟踪全局最大值。
        result = Math.max(result,currMax)
    }
    return result 
};