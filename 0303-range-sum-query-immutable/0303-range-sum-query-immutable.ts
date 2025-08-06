
class NumArray {
private prefixSum: number[];
    
    constructor(nums: number[]) {
        
        this.prefixSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            console.log(i)
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
            console.log(this.prefixSum);
        }
        
    }
    
    sumRange(left: number, right: number): number {
        return this.prefixSum[right + 1] - this.prefixSum[left];
                // 区间 [left, right] 的和 = prefixSum[right + 1] - prefixSum[left]
    }
}

// class NumArray {
// private sums: number[];
//     constructor(nums: number[]) {
//         this.sums = [];
//         let cur = 0; 
//         for (let i = 0; i < nums.length; i++) {
//             cur += nums[i]
//                    this.sums.push(cur);
//         }
//     }
    
//     sumRange(left: number, right: number): number {
//         let rightSum = this.sums[right]
                       
//                        let leftsum: number;
//         if (left > 0) {
//             leftsum = this.sums[left - 1];
//         } else {
//             leftsum = 0;
//         }
//         return rightSum - leftsum
//     }
// }

