function getEncryptedString(s: string, k: number): string {
    
 
    let newString = ""
    for(let i = 0; i < s.length; i++){
       let index = (i+k)% s.length     
        newString += s[index]
        
    }
    return newString
};