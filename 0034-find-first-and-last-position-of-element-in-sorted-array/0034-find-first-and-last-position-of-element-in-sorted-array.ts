function searchRange(nums: number[], target: number): number[] {
 
        if (nums.length === 0) return [-1, -1];

    //先去寻左边界
    let l = binSearch(nums,target,true)
    //再去寻找右边界
    let r = binSearch(nums,target,false)
    return [l,r]

};

const binSearch = (nums,target, isLeft) =>{
        let left = 0
    let right = nums.length -1 
    let index = -1; 
    while(left <= right){
        let mid = Math.floor((left+right)/2)
         if(nums[mid] > target){
            right = mid -1
        }else if(nums[mid] < target){
             left = mid + 1
        }else{
            index = mid
            if(isLeft){
                //如果我们寻找的是左边界
                right= mid -1 //去中间位置的左边
                } else{
                    left = mid +1
                }
            }
        }
        return index
    }
