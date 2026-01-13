type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    

    return Object.keys(obj).length === 0
};

 
//  方法 3：使用循环
// 如果数组/对象不为空，解释器将进入 for-in 循环，因此将运行第一个返回语句 false。如果为空，解释器将不进入 for-in 循环，因此将执行第二个返回语句 true。
 
// var isEmpty = function(obj) {
//     for (const _ in obj) return false;
//     return true;
// };
 