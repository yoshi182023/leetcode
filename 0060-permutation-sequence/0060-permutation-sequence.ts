function getPermutation(n: number, k: number): string {


    let factorial = new Array(n).fill(0);
    console.log(factorial)    // 计算阶乘数组，factorial[i] = i!
        factorial[0] = 1;
    for (let i = 1; i < n; ++i) {
        factorial[i] = factorial[i - 1] * i;}
    
    let result = ""; 
    let used = new Array(n).fill(0);
    for(let i =0; i< n;i++){
        //确定之后，还有多少个排列 当我们固定第 1 个数字时，剩下的 n-1 个数字可以有 (n-1)! 种排列方式。
        let cnt = factorial[n-i-1]
            for(let j =1;j<= n; j++){ //：遍历数字 1 到 n，找到当前位应该放哪个数字。
            if(used[j]== true) continue; //如果j用了的话，跳过
    //continue 的作用是跳过当前循环的剩余部分，直接进入下一次迭代（即 j++）。
            if(k> cnt) {
                //说明要求的不在这里
                k -= cnt;
            }else{
                //答案就在当前数字 说明第 k 个排列在当前数字 j 开头的排列中。
                result += j 
                    used[j] = true
                    console.log(used)
                    break //跳出内层循环，进入下一位???
                   // 只会跳出当前所在的最近一层 for 循环
            }
        }
    }
    return result 
};