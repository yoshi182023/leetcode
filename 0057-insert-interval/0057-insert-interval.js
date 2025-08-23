/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = []
    let i = 0; 
    const start = 0; 
    const end = 1;
    // 添加所有结束时间小于新区间开始时间的区间
    while(i<intervals.length && intervals[i][end]< newInterval[start]){
        res.push(intervals[i]);
        i++;
    } // 合并所有与新区间重叠的区间
 while(i < intervals.length && intervals[i][start] <= newInterval[end] && intervals[i][end] >= newInterval[start]){        //newInterval[start]要插入的新区间的开始时间
        newInterval[start] = Math.min(newInterval[start], intervals[i][start])
        newInterval[end] = Math.max(newInterval[end], intervals[i][end])//intervals[i][end当前区间的结束时间
        i++;
    }
    res.push(newInterval)
    while(i<intervals.length){
        res.push(intervals[i])
        i++
    }
    return res
};