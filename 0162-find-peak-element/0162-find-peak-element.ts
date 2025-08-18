function findPeakElement(nums: number[]): number {
 
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // 峰值在左边（包含 mid）
        } else {
            left = mid + 1; // 峰值在右边
        }
    }
    return left; // 或 right，最后 left==right
};
