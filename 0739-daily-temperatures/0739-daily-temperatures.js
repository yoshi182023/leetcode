/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0)
    for(let i=temperatures.length-1; i >=0; i--){
        console.log(i)
        while(stack.length && temperatures[i] >= stack[stack.length-1][0]){
            console.log("length",stack.length)
            stack.pop()
        }
        if(stack.length && temperatures[i] < stack[stack.length-1][0]){
            let distance = stack[stack.length-1][1] - i 
            result[i] =distance
        }
        stack.push([temperatures[i],i])
  
    }
    return result
};