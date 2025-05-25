/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq = {}
    let count = 0
    let consonantFreq = {};
    isVowel = ['a','e','i','o','u'];
     // Initialize frequency counts for all vowels to 0
    for (let vowel of isVowel) {
        freq[vowel] = 0;
    }
    for (let char of s) {
        // Check if the character is a vowel (case-insensitive)
        if (isVowel.includes(char.toLowerCase())) {
            freq[char.toLowerCase()]++;
        } else {
             if (!consonantFreq[char]) {
                consonantFreq[char] = 0;
            }
            consonantFreq[char]++;
        }
    }
 // Find the maximum frequency value
    let maxFreq = 0;
    for (let vowel in freq) {
        if (freq[vowel] > maxFreq) {
            maxFreq = freq[vowel];
        }
    }
      let maxConsonant = 0;
    for (let consonant in consonantFreq) {
        if (consonantFreq[consonant] > maxConsonant) {
            maxConsonant = consonantFreq[consonant];
        }
    }
    return maxConsonant + maxFreq
};