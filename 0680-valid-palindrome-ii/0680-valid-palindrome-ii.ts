function validPalindrome(s: string): boolean {
    const isPalindrome = (s,i,j)=>{
       for (let k = i; k <= i + (j - i) / 2; k++){
            if(s[k] !== s[j-k+i]) return false
       }
       return true
        }
   
        let i = 0, j = s.length-1;
        while(i<j){
            if(s[i] != s[j]){
                return (isPalindrome(s,i+1,j) || isPalindrome(s,i,j-1));
            }
            i++;
            j--;
        }
        return true;
    

};