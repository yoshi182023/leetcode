/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    console.log("nums1",nums1)
   // 首先遍历较短的数组并在哈希表中记录每个数字以及对应出现的次数，然后遍历较长的数组得到交集
      if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
  console.log("nums1",nums1)
  let mymap = new Map()
  for(let num of nums1){
    mymap.set(num, (mymap.get(num)||0 )+1)
  }
  let intersection = []
  for(let num of nums2){
    if(mymap.has(num) && mymap.get(num)>0){
        intersection.push(num)
        mymap.set(num,mymap.get(num)-1)
    }
  }
  return intersection
};