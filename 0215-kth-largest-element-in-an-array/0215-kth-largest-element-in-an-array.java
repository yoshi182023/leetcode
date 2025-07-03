class Solution {
    int [] nums; 
    public void swap (int a, int b){
        int temp = this.nums[a];
        this.nums[a] = this.nums[b];
        this.nums[b] = temp;
    }

    public int partition(int left, int right, int pivot_idx){
          int pivot = this.nums[pivot_idx];     // 取出枢轴元素
    swap(pivot_idx, right);               // 把枢轴元素移到右边（结尾）
    int store_index = left;               // 初始化存储区起点
    for(int i = left; i <= right; i++){
        //  应该判断 nums[i] < pivot（或其它条件），然后交换
        if(this.nums[i] < pivot){
            swap(store_index,i);
            store_index++;
        }
    }
    swap(store_index,right);
    return store_index; //把轴值放到预期位置
    }

    public int quickselect(int left, int right, int k_smallest){
        if(left == right){// 定义递归出口
            return this.nums[left];
        }
        Random random_num = new Random(); //随机生成轴值 最左边作为也可以
            int pivot_idx = left + random_num.nextInt(right - left);
//返回一个介于 0（包含） 到 n（不包含）之间的随机整数。
// random_num.nextInt(right - left + 1)：随机生成一个 0 到 right-left 之间的整数
        pivot_idx = partition(left,right,pivot_idx);
        //调用partition找到正确的位置
        if(k_smallest == pivot_idx) return this.nums[k_smallest];
        else if(k_smallest < pivot_idx)
        return quickselect(left,pivot_idx -1, k_smallest);// k 小的元素在左边，递归左边部分继续找。
            return quickselect(pivot_idx + 1, right, k_smallest); // 去右边找
    }//\U0001f50d 否则在右边，递归右边部分继续找。


    public int findKthLargest(int[] nums, int k) {
         int n =nums.length; 
         this.nums = nums;
         // 第 k 大 = 第 n-k 小（因为 QuickSelect 找的是第 k 小）
        return quickselect(0, n- 1, n - k);
    }
    
};