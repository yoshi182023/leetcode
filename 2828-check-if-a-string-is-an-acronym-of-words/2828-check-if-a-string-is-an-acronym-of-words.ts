function isAcronym(words: string[], s: string): boolean {
    


//     let result = ""
//     for(let word of words){
//         result+= word[0]
//     }
//     console.log(result)
//     if(result  === s ){
//         return true
//     }else{
//         return false
//     }
// };
 if (words.length != s.length) {
        return false;
    }
 for (let i = 0; i < s.length; i++) {
        if (words[i][0] != s[i]) {
            return false;
        }
    }
    return true;
}