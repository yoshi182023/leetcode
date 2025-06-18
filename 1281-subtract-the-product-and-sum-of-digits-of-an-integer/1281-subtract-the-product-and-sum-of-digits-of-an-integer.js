/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let str = n.toString().split("")
   let multiply = str.reduce((a,b)=> parseInt(a) * parseInt(b))
      let add = str.reduce((a,b)=> parseInt(a) + parseInt(b))
      return multiply - add

};