function maxSubsequence(nums: number[], k: number): number[] {

 
      const n = nums.length;
    const vals = []; // 辅助数组
    for (let i = 0; i < n; ++i) {
        vals.push({ index: i, value: nums[i] }); // 存储索引和值
    }
  
   // 按照数值降序排序
    vals.sort((x1, x2) => x2.value - x1.value);
      console.log(vals)
// [
//   { index: 2, value: 3 },
//   { index: 3, value: 3 },
//   { index: 0, value: 2 },
//   { index: 1, value: 1 }
//]
 // 取前 k 个并按照下标升序排序
    const topK = vals.slice(0, k); // 获取前 k 个元素
  
    //[ { index: 2, value: 3 }, { index: 3, value: 3 } ]

        topK.sort((x1, x2) => x1.index - x2.index); // 对前 k 个元素按索引升序排序
  console.log(topK)
// [
//   { index: 0, value: -1 },
//   { index: 2, value: 3 },
//   { index: 3, value: 4 }
// ]
    const res = []; // 目标子序列

    for (let i = 0; i < k; ++i) {
        res.push(topK[i].value); // 将排序后的值加入结果
    }
    return res;
};

 