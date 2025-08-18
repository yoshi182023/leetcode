/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    let patt = pattern.split('');
    if (patt.length !== words.length) {
        return false;
    }
    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < patt.length; i++) {
        const char = patt[i];
        const word = words[i];
        
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }
        
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }
    return true;
};