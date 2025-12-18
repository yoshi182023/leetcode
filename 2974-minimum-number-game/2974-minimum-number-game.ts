function numberGame(nums: number[]): number[] {
    
 
    //nums.sort() 在 JavaScript 里是按「字符串」排序，不是按「数字」排序
    //nums.sort()
    //console.log("sort",nums) [ 11, 14, 17, 18, 2, 4 ]
      nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
    return nums;
}