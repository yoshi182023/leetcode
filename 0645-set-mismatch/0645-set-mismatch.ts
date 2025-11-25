function findErrorNums(nums: number[]): number[] {
    let result = [0, 0] // [duplicate, missing]
    let count = new Map<number, number>()

    for(let num of nums){
        count.set(num,(count.get(num)||0)+1)
        //console.log(count)
    }
      // 遍历 1..n，找重复和缺失
          for (let i = 1; i <= nums.length; i++) {
            const c = count.get(i) || 0
            if(c===0){
                result[1] = i
            }
            if(c===2){
                result[0]= i
            }
          }
    return result
};