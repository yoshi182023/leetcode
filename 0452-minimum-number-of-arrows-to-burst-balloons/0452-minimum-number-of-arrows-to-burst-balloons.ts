function findMinArrowShots(points: number[][]): number {
    
        if (points.length === 0) return 0;

    let sortPoint = points.sort((a,b)=>a[0]-b[0])
    console.log(sortPoint)

let count =1
let start = sortPoint[0]
for(let i =1; i< sortPoint.length; i++){
    let curr = sortPoint[i]
    if(curr[0]>start[1]){
        count++
        start = curr
    }else{
        start[0]=Math.max(curr[0],start[0])
        start[1]=Math.min(curr[1],start[1])
    }
}
return count
};