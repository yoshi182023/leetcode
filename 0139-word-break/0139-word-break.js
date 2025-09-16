/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //cache
    const dp = new Array(s.length+1).fill(false);
//base case : is the last postion, out of bound 

    // base case: 空字符串是有效的（从末尾往前推）
    dp[s.length] = true;

  //go through every position in the length of the string 
  for(let i =s.length-1; i>=0; i--){
    for(w of wordDict){
      // 如果当前子串够长，且 s[i...i+w.length] == w
            if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
                // console.log("s.slice(i, i + w.length)",s.slice(i, i + w.length))
                // console.log("w",w)
                // console.log("i",i)
                // console.log("[i + w.length]",i + w.length)
                console.log("dp[i + w.length]",dp[i + w.length])
                dp[i] = dp[i + w.length];  // 能拆分成功
               // console.log("dp[i]",dp[i])
            }
            if (dp[i]) break; // 已经找到能拆分的单词，就不用继续了
        }//move on to next index
    }

    return dp[0]; // 能不能从 0 拆到末尾
};





//     table[0] = true;  //设置一个dp的数组 起始位置是true

//     for(let i= 0; i< table.length; i++){
//         console.log(i);
//       if(table[i] === false) continue;
//       for(let j = i+1; j< table.length; j++){
//           console.log("j: "+j);
//           //now we wanna check: does that substring  is it in the dictionary 
//           if(wordDict.includes(s.slice(i,j))){
//               console.log(s.slice(i,j));
//               table[j] = true;//到当前位置为止可以拼出来  
//                console.log("j"+j);
//           }
//       }  
//     }
// return table[table.length-1];
// };