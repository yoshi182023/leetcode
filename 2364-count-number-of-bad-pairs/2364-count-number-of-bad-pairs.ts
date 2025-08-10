function countBadPairs(nums: number[]): number {
    
 
   const map = new Map(); // 存储每个差值的出现次数
    let goodPairs = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i; // 计算当前差值
        // 如果之前出现过这个差值，就能组成好对
        goodPairs += map.get(diff) || 0;
        // 更新这个差值的出现次数
        map.set(diff, (map.get(diff) || 0) + 1);
    }
    
    const totalPairs = nums.length * (nums.length - 1) / 2;
    return totalPairs - goodPairs;
};