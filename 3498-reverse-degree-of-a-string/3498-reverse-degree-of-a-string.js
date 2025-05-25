/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase(); // 确保小写
        const reversedPos = 26 - (char.charCodeAt(0) - 'a'.charCodeAt(0)); // 计算反转位置
        const strPos = i + 1; // 字符串中的位置（从1开始）
        sum += reversedPos * strPos;
    }
    return sum;
}

