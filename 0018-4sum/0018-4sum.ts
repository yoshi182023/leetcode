function fourSum(nums: number[], target: number): number[][] {
    

    nums.sort((a,b)=> a-b)
    let result = []
    if(nums.length < 4) return []
    for(let i = 0; i < nums.length -3; i++){
        for(let j = i+1; j < nums.length -2 ; j++){
            let k = j+1; 
            let l = nums.length -1; 
            while(k<l){
                let sum = nums[i] + nums[j] +nums[k] + nums[l]
                if(sum === target){
                    result.push([nums[i],nums[j], nums[k], nums[l]])
                    //check duplicates 
                    while(nums[k] === nums[k+1]) k++
                     while(nums[l] === nums[l-1]) l--
                    k++
                    l--
                }else if (sum < target) {
                    k++
                }else{
                    l--
                }
            }
            while(nums[j] === nums[j+1]) j++
        }
        while(nums[i] === nums[i+1]) i++
    }
    return result 
};