/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
     let stack = []
    for(let i = 0; i < prices.length; i++){
        while(stack.length && prices[stack[stack.length - 1]] >= prices[i]){
             let j = stack[stack.length - 1]

  
            prices[j] -= prices[i]
   stack.pop()
        }
        stack.push(i)
        }
    
 return prices
    
    
};