/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sMap = {}    // 记录 s 中每个字符的位置

    for (let i = 0; i < s.length; i++) {
            sMap[s[i]] =i
    }
        // 记录 t 中每个字符的位置

    let tMap = {}
    for (let j = 0; j < t.length; j++) {
            tMap[t[j]] =j
    }
     // 计算所有字符的位置差绝对值的和
    let sum = 0;
    for (let char of s) {
        sum += Math.abs(sMap[char] - tMap[char]);
    }
    return sum   
};