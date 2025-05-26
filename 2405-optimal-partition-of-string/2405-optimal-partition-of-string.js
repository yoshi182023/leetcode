/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let currSet = new Set()
    let result = 1
    for (let c of s){
        if(currSet.has(c)){
            result +=1
            //currSet = new Set()
            currSet.clear()
      
        } 
            currSet.add(c)
        }
    
    return result 
};