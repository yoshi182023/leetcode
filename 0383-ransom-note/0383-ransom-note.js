/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let mamap = {}
  for(let char of magazine){
    console.log(char)
    mamap[char] = (mamap[char]||0)+1
    
  }
  for(ch of ransomNote){
     if (!mamap[ch] || mamap[ch] < 1) {
      return false;
    }
    mamap[ch]--;
  }
  return true
};