/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
 
    let count=0
    for(let i = 0; i < nums.length -1;i++){
         const leftSum = nums.slice(0, i + 1).reduce((acc, num) => acc + num, 0);
        const rightSum = nums.slice(i + 1).reduce((acc, num) => acc + num, 0);
        const diff = leftSum - rightSum;
        if( diff % 2 === 0){
            count++
        }
    }
    return count
};