function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
 
    let count = 0;
    for (const num of arr1) {
        let isValid = true;
        for (const val of arr2) {
            if (Math.abs(num - val) <= d) {
                isValid = false;
                break; // 只要有一个不满足，直接跳出循环
            }
        }
        if (isValid) count++;
    }
    return count;
};
