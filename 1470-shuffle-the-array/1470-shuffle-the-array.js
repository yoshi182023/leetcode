/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const answer = new Array (2*n).fill(0)
    for(let i = 0; i < n;i++){
        answer[i*2]=nums[i]
        answer[i*2+1]= nums[i+n]
    }
    return answer
};