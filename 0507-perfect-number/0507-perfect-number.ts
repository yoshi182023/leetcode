function checkPerfectNumber(num: number): boolean {

    let myray = []
    for(let i = 1; i < num; i++){
        if(num%i === 0){
            myray.push(i)
        }
    }
    let result = 0
    for(let num of myray){
        result+=num
    }
    return result === num
};