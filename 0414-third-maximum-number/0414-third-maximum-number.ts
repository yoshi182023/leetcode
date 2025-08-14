function thirdMax(nums: number[]): number {
 
 
   let uniqueNums = nums.sort((a, b) => b - a);      // 降序排序
    console.log(uniqueNums)
    let unique = [...new Set(uniqueNums)]
        console.log(unique)
   // 判断是否有第三大的数
    if (unique.length >= 3) {
        return unique[2]; // 返回第三大的数
    } else {
        return unique[0]; // 返回最大的数
    }
};