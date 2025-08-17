/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    let sortarr = citations.sort((a,b) => b-a)
      let h  = 0 
    for(num of sortarr){
      if(num > h){
        h++
      }
    }
    return h
};