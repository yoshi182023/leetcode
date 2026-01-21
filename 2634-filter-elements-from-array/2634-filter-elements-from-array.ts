type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
 

    //return arr.filter(fn)
    const res = []
    for(let i in arr){
        //value use of 
        if( fn(arr[i], Number(i))) {
            res.push(arr[i])
        }
    }
    return res

};