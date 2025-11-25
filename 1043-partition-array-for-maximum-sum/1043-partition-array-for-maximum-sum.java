class Solution {
    Map<Integer, Integer> map = new HashMap<>();
    public int maxSumAfterPartitioning(int[] arr, int k) {
        return dfs(arr,k, 0);
    }
    public int dfs(int[] arr, int k, int start){
        int n = arr.length;
        if(start >= n) return 0;
        if(map.containsKey(start)) return map.get(start);
        int currMax = 0;
        int res = 0;
        for(int i = start; i < n && i < start +k; i++){
            currMax = Math.max(currMax, arr[i]);
            int length = i - start + 1; 
            res = Math.max(res, currMax * length + dfs(arr, k, i+1));
        }
        map.put(start,res);
        return res;
    }

}