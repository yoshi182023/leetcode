/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {}
    let res = 0
    for(let char of s){
       count[char] = count[char]? count[char]+1 :1
       if(count[char] % 2 === 0){
        res+=2
       }
    }
       for(let value of Object.values(count)){
            if(value %2 ===1){
                res+=1
                break
                console.log(res)
            }
       }
    
    console.log(count)
    return res
};