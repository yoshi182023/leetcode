function increasingTriplet(nums: number[]): boolean {
 
//  从左到右遍历数组 nums，遍历过程中维护两个变量 first 和 second，
//分别表示递增的三元子序列中的第一个数和第二个数，
//任何时候都有 first<second。
// 如果 num>second，则找到了一个递增的三元子序列，返回 true；
// 否则，如果 num>first，则将 second 的值更新为 num；
// 否则，将 first 的值更新为 num。

 
      if (nums.length < 3) {
        return false;
    }
    let minfirst = Number.MAX_VALUE, minsecond = Number.MAX_VALUE;
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            if(curr > minsecond ){
                //case 3
                return true;
            } else if (curr < minfirst){
                //如果当前的数小于最小的数
                minfirst = curr
                console.log("minfirst",minfirst)
            }else if(curr > minfirst && curr < minsecond){
                //如果当前的数比最小的数大 但小于第二小的数
                    minsecond = curr
                    console.log("curr",curr)
                    console.log("minsecond",minsecond)
            }
        }
     return false
};