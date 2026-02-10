function findDisappearedNumbers(nums: number[]): number[] {
    

    for(let num of nums){
        let i = Math.abs(num) -1
        console.log(i)
        nums[i] = -1 * Math.abs(nums[i])
        console.log(nums)
    }
    let result = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        result.push(i + 1)
    }
}
return result

};