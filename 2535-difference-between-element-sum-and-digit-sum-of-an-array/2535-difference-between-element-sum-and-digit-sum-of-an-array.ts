function differenceOfSum(nums: number[]): number {
 
const sum = nums.reduce((acc, cur) => acc + cur, 0);
let otherSum = nums.join('').split('')               
let other = otherSum.reduce((acc, cur) => acc + Number(cur), 0);
return Math.abs(sum-other)

};