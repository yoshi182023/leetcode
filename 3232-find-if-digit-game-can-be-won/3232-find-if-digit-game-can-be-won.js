/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sum = 0
    let large = 0
    for (let num of nums){
        if(num < 10){
            sum += num
        }else{
            large += num
        }
    }
    if(sum !== large){
        return true
    }
    return false 
};