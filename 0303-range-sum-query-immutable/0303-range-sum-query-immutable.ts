
class NumArray {
private sums: number[];
    
    constructor(nums: number[]) {
        
        this.sums = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.sums[i + 1] = this.sums[i] + nums[i];
        }
        
    }
    
    sumRange(left: number, right: number): number {
        return this.sums[right + 1] - this.sums[left];
        
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

