type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
       
    return async function(...args) {

        //return a promise 
        return new Promise((resolve, reject)=> {
            const id = setTimeout(()=> reject("Time Limit Exceeded"),t)
            //a method, not a value , passing this function in 
            fn(...args)
            .then((res)=> resolve(res))
            .catch((err)=> reject(err))
            .finally(()=>  clearTimeout(id))
           
        })
    }
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */