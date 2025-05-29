/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a, b) => a - b); // 确保升序排列
    let result = 0;
    for (let i = 0; i < k; i++) {
        const max = nums[nums.length - 1]; // 当前最大值
        result += max;
        nums[nums.length - 1] = max + 1; // 最大值加 1
    }
    return result;
};