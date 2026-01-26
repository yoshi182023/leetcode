function pivotInteger(n: number): number {
    

     let totalSum = n * ( n +1) / 2
     let leftSum = 0;
     for(let i = 1; i <= n; i++){
        leftSum += i
        if(leftSum == totalSum - leftSum + i){
            return i
        }else if(leftSum > totalSum - leftSum + i){
            return -1
        }
        
     }
     return -1
};