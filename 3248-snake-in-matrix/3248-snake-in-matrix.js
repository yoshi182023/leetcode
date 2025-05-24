/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
        let ans = 0;
    for(let command of commands){

         if(command === 'RIGHT'){
          ans++;
         }  else if (command === 'LEFT') {
            ans--
            } else if (command === 'DOWN') {
                ans +=n
            }else{
                ans -=n
            }
    }
    return ans
};