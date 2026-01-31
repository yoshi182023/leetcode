function duplicateNumbersXOR(nums: number[]): number {
    
   const seen = new Set()
    let result = 0

    for (let num of nums) {
        if (seen.has(num)) {
            result ^= num
        } else {
            seen.add(num)
        }
    }

    return result
};