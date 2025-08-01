function permuteUnique(nums: number[]): number[][] {
    

    nums = nums.sort((a,b)=>a-b);
    const result = [];
    const used = Array(nums.length).fill(false);

    function backtrack(path){
        if(path.length === nums.length){
            result.push([...path])
            return
    }
    for(let i = 0; i < nums.length;i++){
        if(used[i] === true) continue; 
        //skip this round of the loop 
        //and move to the next round of loop 
        if(i >0 && nums[i] === nums[i-1] && !used[i-1]) continue
        used[i] = true
        path.push(nums[i])
        backtrack(path)
        path.pop()
        used[i] = false 
    }
    }
    backtrack([])
    return result

};