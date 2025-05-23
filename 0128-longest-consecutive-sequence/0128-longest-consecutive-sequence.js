/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let streak = 0;
    for(let num of set){
        if(set.has(num-1))
        continue;
        let currStreak = 1; //find a sequence 
        while(set.has(num+1)){
            currStreak++;
            num++
        }
        streak = Math.max(streak, currStreak)
    }
    return streak
};