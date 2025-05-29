/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(array) {
    if (array.length === 0) return 0;
    
    let stack = [];
    stack.push([array[0], 0]); // 存储 [value, index]
    let maxLength = 1;
    
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let top = stack[stack.length - 1];
        if (current > top[0]) {
            // 当前元素大于栈顶元素，可以扩展序列
            stack.push([current, i]);
            maxLength = Math.max(maxLength, stack.length);
        } else {
            // 当前元素小于等于栈顶元素，尝试找到可以替换的位置
            let j = stack.length - 2; // 从栈顶第二个元素开始比较
            while (j >= 0 && stack[j][0] >= current) {
                j--;
            }
            
            if (j >= 0) {
                // 找到可以替换的位置
                stack[j + 1] = [current, i];
            } else {
                // 比所有栈元素都小，替换第一个
                stack[0] = [current, i];
            }
        }
    }
    
    return maxLength;
};