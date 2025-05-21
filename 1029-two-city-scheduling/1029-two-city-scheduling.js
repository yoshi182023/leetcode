/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
     let diff = costs.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
     console.log(diff)
     let result = 0;
    for(let i=0; i< diff.length;i++){
        if(i < (diff.length/2)){
            result+= diff[i][1]
        }else{
            result+= diff[i][0]

        }

    }
    return result; 

};