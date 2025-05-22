/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let interval = intervals.sort((a, b) => a[1] - b[1]);
    console.log(interval)//sort by the second value within this array
   // console.log(interval) [ [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 3, 4 ] ]

    let result = 0;
    //intiially track the first end value
    let prevEnd = interval[0][1]
    //iterating through the remaining interval 
    for(let i = 1; i < interval.length; i++){
               //  const [start, end] = intervals[i];

        //are they overlaping or not? 
        if(interval[i][0] >= prevEnd){
            //if they are equal, they are not overlaping
            //update prev end, set it to the new value
            prevEnd = interval[i][1]
        }else{
            //overlaping, remove one interval 
            result +=1; 
            prevEnd = Math.min(interval[i][1],prevEnd)
        }
    }
    return result
};