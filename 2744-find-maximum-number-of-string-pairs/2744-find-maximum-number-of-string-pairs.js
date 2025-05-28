/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count = 0
    for(let i =0; i< words.length; i++){
        for (let j = i + 1; j < words.length; j++) {
            console.log(i)
            if (words[i] === words[j].split('').reverse().join('')) {
                console.log(j)
                console.log(words[j].split(''))
               
                count ++
            }

        }
    
        
    }
    return count
    
};