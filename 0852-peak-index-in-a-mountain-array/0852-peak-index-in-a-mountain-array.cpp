class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
          int left = 0; 
        int answer = 0;
        int right = arr.size() -1;
      while (left <= right) {
                int mid = (left+right)/2;

            if(arr[mid]> arr[mid+1]){
                answer = mid;
                right = mid-1;
            }else{
                left = mid+1;
            }
      }
     return answer; 
};
};
    