// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = candies.map(() => false)
//     //[ false, false, false, false, false ]
//     console.log(result)
//     // let highest = candies.sort();
//     //candies = [ 1, 2, 3, 3, 5 ]
//     // let high  = highest[0];
//         // 修复1：正确获取最大值（避免修改原数组的复制排序）
//     let high = Math.max(...candies); 
//     for(let i =0; i<candies.length;i++){ 
//         let curr = candies[i]+ extraCandies
//         if( curr >= high){
//             result[i] = true
//         }
       
//     }
//     return result;
// };
//O(n)
var kidsWithCandies = function(candies, extraCandies) {
    // 先找出原始数组中的最大值
    const maxCandies = Math.max(...candies);
    
    // 遍历每个孩子，判断当前糖果+额外糖果是否≥最大值
    return candies.map(candy => candy + extraCandies >= maxCandies);
};