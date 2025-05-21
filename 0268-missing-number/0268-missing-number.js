/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let num = nums.sort((a, b) => a - b);

      // 检查是否缺失 0
    if (num[0] !== 0) {
        return 0;
    }
    
          // 检查中间缺失的数字
    for (let i = 0; i <= num.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};