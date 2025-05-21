/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numMap = {}; // Create a hash map to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        
        // Store the current number and its index in the map
        numMap[nums[i]] = i;
    }
    
    return []; // Return empty array if no solution found (though problem states there is one)
};