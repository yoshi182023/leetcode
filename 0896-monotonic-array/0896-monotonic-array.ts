function isMonotonic(nums: number[]): boolean {
    let decrease = true 
    let increase = true;
  
    let n = nums.length -1 

    for(let i = 0; i < n; i++){
        if (!(nums[i] <= nums[i+1])){ //increasing 
            increase = false 
        }
         if (!(nums[i] >= nums[i+1])){  
            decrease = false 
        }
    }
        return increase || decrease 
};