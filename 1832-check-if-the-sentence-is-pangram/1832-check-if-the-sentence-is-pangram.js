/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
       let arr = sentence.split('')
    let set = new Set(arr)
    return set.size === 26
};