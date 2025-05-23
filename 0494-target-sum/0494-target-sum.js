/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = 0; 

    const dfs = (i,nums,target, runningSum)=>{
        //base case 
        if(i===nums.length){ //leaf level
        if(runningSum === target){
            result ++;
        }
        return;
        }
        //recursive helper 
        //include + 
        runningSum += nums[i]
        dfs(i+1,nums,target,runningSum)
        runningSum -= nums[i]
        //-
         runningSum -= nums[i]
        dfs(i+1,nums,target,runningSum)
        runningSum += nums[i]
    }
    dfs(0,nums,target,0)
    return result
};