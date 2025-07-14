function findDifference(nums1: number[], nums2: number[]): number[][] {
    let res = [];
  const set1 = new Set(nums1);
  console.log(set1);
  const set2 = new Set(nums2);
    console.log(set2);

  res.push(Array.from(set1).filter(item => !set2.has(item)))
  res.push(Array.from(set2).filter(item => !set1.has(item)))
  return res;
};

 