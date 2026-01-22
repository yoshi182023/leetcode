type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
  
 
    const cache = {};
    return function(...args) {
        //args is always an array 
        const key = JSON.stringify(args)
        //takes a object convert it to a string 
        if(key in cache){
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */