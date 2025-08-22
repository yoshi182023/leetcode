/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
   const pair = position.map((p, index) => [p, speed[index]]);
   //console.log(pair)//[ [ 10, 2 ], [ 8, 4 ], [ 0, 1 ], [ 5, 1 ], [ 3, 3 ] ]
   let stack = []
 let sortedpair = pair.sort((a, b) => a[0] - b[0]);
 //[ [ 0, 1 ], [ 3, 3 ], [ 5, 1 ], [ 8, 4 ], [ 10, 2 ] ]
   console.log(sortedpair)    
    // 从离终点最近的车开始处理（因为排序后是升序，所以需要从后往前）
    for (let i = sortedpair.length - 1; i >= 0; i--) {
        const [p, s] = sortedpair[i];
        const time = (target - p) / s;
        // 如果当前车到达时间 <= 栈顶车到达时间，说明会形成车队
        if (stack.length > 0 && time <= stack[stack.length - 1]) {
            // 当前车会被前面的车队阻挡，不加入栈
            continue;
        }
        
        // 否则，当前车会形成新的车队
        stack.push(time);
        // console.log(stack)/[ 1 ]// [ 1, 7 ]// [ 1, 7, 12 ]
    }
    return stack.length;
};