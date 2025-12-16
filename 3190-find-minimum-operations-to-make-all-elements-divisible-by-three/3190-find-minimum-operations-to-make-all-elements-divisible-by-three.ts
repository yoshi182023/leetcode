function minimumOperations(nums: number[]): number {
     let result = 0
    for(let num of nums){
        
        if(num % 3 !== 0){
            
     
            result+=1
          
        }
    }
    return result 

// 如果 nums[i]=3k，无需操作。
// 如果 nums[i]=3k+1，减一得到 3 的倍数。
// 如果 nums[i]=3k+2，加一得到 3 的倍数。
// 由此可见，对于不是 3 的倍数的元素，只需操作一次就可以变成 3 的倍数。
}