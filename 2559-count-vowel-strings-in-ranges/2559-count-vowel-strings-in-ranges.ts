function vowelStrings(words: string[], queries: number[][]): number[] {

    let n = words.length
    let vowelSet = new Set(["a","e","i","o","u"]);
    //console.log(vowelSet)
    let prefixSums = new Array(n+1).fill(0);
        for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstChar = word[0];
        let lastChar = word[word.length - 1];
        let value = vowelSet.has(firstChar) && vowelSet.has(lastChar) ? 1 : 0;
            console.log(value)
        prefixSums[i + 1] = prefixSums[i] + value;
        }
        let ans = []
        for(let i = 0; i < queries.length;i++){
           let start = queries[i][0], end = queries[i][1]
           ans.push(prefixSums[end+1] - prefixSums[start])
        }
return ans
};

 ;