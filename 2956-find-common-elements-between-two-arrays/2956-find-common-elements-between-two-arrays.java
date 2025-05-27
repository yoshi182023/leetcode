class Solution {
    public int[] findIntersectionValues(int[] nums1, int[] nums2) {
        HashSet<Integer> set1 = new HashSet<>();
        for (int x : nums1) {
            set1.add(x);
        }
        HashSet<Integer> set2 = new HashSet<>();
        for (int x : nums2) {
            set2.add(x);
        }

        int[] ans = new int[2];
        for (int x : nums1) {
            if (set2.contains(x)) {
                ans[0]++;
            }
        }
        for (int x : nums2) {
            if (set1.contains(x)) {
                ans[1]++;
            }
        }
        return ans;
    }
}

 