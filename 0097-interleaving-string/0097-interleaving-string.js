/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    // 初始化 memo
    let memo = Array.from({ length: s1.length + 1 }, () =>
        Array(s2.length + 1).fill(-1)
    );

    function isinter(i, j, k) {
        if (i === s1.length) {
            return s2.substring(j) === s3.substring(k);
        }
        if (j === s2.length) {
            return s1.substring(i) === s3.substring(k);
        }

        if (memo[i][j] !== -1) {
            return memo[i][j] === 1;
        }

        let ans = false;

        if (
            (s1[i] === s3[k] && isinter(i + 1, j, k + 1)) ||
            (s2[j] === s3[k] && isinter(i, j + 1, k + 1))
        ) {
            ans = true;
        }

        memo[i][j] = ans ? 1 : 0;
        return ans;
    }

    return isinter(0, 0, 0);
};