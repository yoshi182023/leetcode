/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //only add open paranthesis if open < n
    //only add a closing paranthesis if closed < open
    //only stop if open == closed == n
    let stack = []
    let result = []
    const backtrack = (open,closed) => {
        if (open === n && closed === n) {   
        result.push(stack.join(''));    //当不传参数时，join() 默认使用 逗号 , 作为分隔符
        return 
        //base case
        }
        if(open < n){
            stack.push("(")
            backtrack(open+1,closed)
            stack.pop()
        }
        if(closed < open){
            stack.push(")")
            backtrack(open,closed+1)
            stack.pop()
        }
    }
    backtrack(0,0)
    return result
};