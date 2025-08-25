function finalString(s: string): string {
   let res = ""
    for(let i =0; i < s.length; i++){
        if(s[i] !== "i"){
            res+= s[i]
        }else{
            res =res.split("").reverse().join("")
        }
    }
    return res
};