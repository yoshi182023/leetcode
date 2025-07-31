/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    let bucket = []
    let result = []
    for(let i =0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1
        }else{
            map[nums[i]]++;
        }
    }
    //console.log(map)//{ '1': 3, '2': 2, '3': 1 }
    for(let [num,freq] of Object.entries(map)){//用来把对象的每个键值对转换成数组形式的元素
            num = Number(num);  // 这里转换为数字

        //console.log(Object.entries(map))[ ["1", 3], ["2", 2], ["3", 1] ]
        if(!bucket[freq]){
            bucket[freq] = new Set().add(num)// bucket[freq] = new Set().add(num)，它的返回值是 Set 本身（因为 add() 方法返回该 Set），所以是 OK 的。
//             console.log(bucket)
//             //bucket = [
//   undefined,             // index 0（没用）
//   Set { "3" },           // 频率为1的数
//   Set { "2" },           // 频率为2的数
//   Set { "1" }    ]        // 频率为3的数

        }else{
            bucket[freq] = bucket[freq].add(num)
        }
    }
    for(let i = bucket.length -1 ; i >= 0; i--){
        //如果这个桶存在（不是 undefined），说明有元素出现了 i 次。
        if(bucket[i]) result.push(...bucket[i])
        if(result.length === k) break
    }
    console.log(result)
    return result
};










