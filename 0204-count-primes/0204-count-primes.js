/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    // 初始化一个布尔数组，默认值为 true
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // 将 i 的倍数标记为非质数
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 统计质数个数
    let count = 0;
    for (let k = 2; k < n; k++) {
        if (isPrime[k]) count++;
    }

    return count;
};