function separateDigits(nums: number[]): number[] {
  
 
    let result = []
    for(let num of nums ){
        while(num > 0 ){
           const digits = [];
           if (num === 0) {
            digits.push(0);
        } else {
            while (num > 0) {
                digits.push(num % 10);
               // console.log("num",num)
                console.log(digits)
                num = Math.floor(num / 10);
               // console.log("math nun",num)
            }
        }
        // Push digits in correct order (reverse of how we collected them)
       // console.log("digitsloop",digits)
        for (let i = digits.length - 1; i >= 0; i--) {
            result.push(digits[i]);
        }
    }
    }
    return result;
};