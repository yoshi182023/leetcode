function twoSum(numbers: number[], target: number): number[] {

    let left = 0
    let right = numbers.length -1 

    while(left < right){
        if(numbers[left] + numbers[right] == target){
            return [left+1, right+1]
        }else if (numbers[left] + numbers[right] < target){
            left++
        }else{
            right--
        }
    }
    return [-1,-1]
};