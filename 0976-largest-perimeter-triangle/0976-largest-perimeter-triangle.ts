function largestPerimeter(nums: number[]): number {
    
 
    nums.sort((a,b) => b -a); //降序排序
    //a < b + c
//即最大的边必须小于另外两边的和）

    for(let i = 0; i < nums.length-2; i++){
        if(nums[i] < nums[i+1] + nums[i+2]){
            return nums[i] + nums[i+1] + nums[i+2]
        }
    }
    return 0
};