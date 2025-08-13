function findMaxK(nums: number[]): number {
 
    let numSet = new Set(nums); // 用 Set 存储所有数字，方便查找
    let maxK = -1; // 初始化为 -1，如果没有满足条件的 k 就返回 -1
    console.log(numSet)
    for (let num of nums) {
        if (num > 0 && numSet.has(-num)) { // 如果是正数且存在对应的负数
            maxK = Math.max(maxK, num); // 更新最大值
        }
    }
    
    return maxK;
};