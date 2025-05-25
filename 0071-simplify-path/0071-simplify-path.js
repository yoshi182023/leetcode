/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    cur = ""
    path = path + '/'
    for (let c of path){
        if (c === '/'){
            if(cur === ".."){
                if (stack.length > 0){
                    stack.pop()
                }
            }else if (cur !="" && cur !='.'){
                stack.push(cur)
            }
            cur = ""
        }else{
            cur += c;
        }
    }
    stack = stack.join('/')
    return "/" + stack
};