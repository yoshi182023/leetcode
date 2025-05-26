/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num.length; i++) {
        const digit = parseInt(num[i], 10); // 将字符转为数字
        if (i % 2 === 0) {
            even += digit; // 偶数索引（0-based）
        } else {
            odd += digit;  // 奇数索引（0-based）
        }//使用 += 将结果累加到 even 或 odd 中。
    }
    return even === odd;
};