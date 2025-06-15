class Solution {
    
    public int longestPalindromeSubseq(String s) {
       int[][] dp = new int[s.length()][s.length()];

        for (int len = 1; len <= s.length(); len++) {
            for (int i = 0; i + len <= s.length(); i++) {
                int j = i + len - 1;

                if (i == j) {
                    dp[i][j] = 1;
                    continue;
                }

                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[0][s.length() - 1];
    }
}
