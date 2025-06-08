function makeSmallestPalindrome(string: string): string {
    /**
 * @param {string} s
 * @return {string}
 */
 
      let s = string.split('');//[ 'e', 'g', 'c', 'f', 'e' ]
      let left = 0, right = s.length - 1;
       while (left < right) {
        if (s[left] != s[right]) {
            if (s[left] < s[right]) {
                s[right] = s[left];
            } else {
                s[left] = s[right];
            }
        }
        left++;
        right--;
    }
    return s.join('');

};