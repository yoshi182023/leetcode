/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
       
    for (let i = 1; i <= n; i++) {
     const sb = [];
        if(i % 3 === 0 && i % 5 === 0){
              sb.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            sb.push("Fizz");
        }
        else if (i % 5 === 0) {
            sb.push("Buzz");
        }else{
        
            sb.push(i);
        }
      console.log(sb)
        answer.push(sb.join('')); //join('') 的作用是把数组的所有元素拼接成一个字符串。
    }
    console.log(answer)
    return answer
};
  