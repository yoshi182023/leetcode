/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {}
    for (let num of nums){
        map[num] = 0
    }
    for(let num of nums){
        map[num]++
    }
   const result = Object.keys(map).filter(key => map[key] === 2).map(Number)
   return result
};
//.map(Number) 是 JavaScript 中一个简洁的写法，
//用于将数组中的每个元素转换成数字类型（Number）。
//它的作用等价于 .map(item => Number(item))。