/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    
   
nums.sort((a, b) => a - b);
    let averages = [];
    while (nums.length > 0) {
        let minElement = nums.shift(); // 移除并获取最小元素
        let maxElement = nums.pop();   // 移除并获取最大元素
        let avg = (minElement + maxElement) / 2;
        averages.push(avg);
    }
    return Math.min(...averages);
};