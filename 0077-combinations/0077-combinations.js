/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result= [];
    const backtrack = (index,comb) =>{
        if (comb.length === k){
            result.push([...comb])
            return
        }
        for(let i =index ; i <= n; i++){
            comb.push(i)
            backtrack(i+1,comb)
            comb.pop()
        }

    }
    backtrack(1,[])
    return result
};