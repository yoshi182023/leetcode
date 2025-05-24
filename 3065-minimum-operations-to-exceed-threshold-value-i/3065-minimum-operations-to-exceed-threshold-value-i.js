/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
     var minOperations = function(nums, k) {
    let res = 0;
    for (let num of nums) {
        if (num < k) {
            res++;
        }
    }
    return res;
};
