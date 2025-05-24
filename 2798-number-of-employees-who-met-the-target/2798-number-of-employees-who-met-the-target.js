/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    ans = 0

       for(let hour of hours){
        if (hour >= target) {
            ans++
        }
    }
    return ans
};

 