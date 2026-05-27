// class Solution {
//     public int firstMissingPositive(int[] nums) {
//         ///
//     }
// }
class Solution {
    public int firstMissingPositive(int[] nums) {
  

     int n = nums.length;

        for (int i = 0; i < n; i++) {
            //只要当前元素在1-n的范围内，但它不在正确的位置上
            while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                //避免出现重复的元素
                int correctIndex = nums[i] - 1;
                int temp = nums[i];
                nums[i] = nums[correctIndex];
                nums[correctIndex] = temp;
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}