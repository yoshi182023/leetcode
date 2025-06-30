/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let s = (x ^ y).toString(2); // 转换为二进制字符串
    console.log(s)//101

   let bits = s.split('');     // 按字符切分为数组
   console.log(bits)//[ '1', '0', '1' ]
       let newarray = bits.filter(bit => bit === '1')//
       console.log(newarray)//[ '1', '1' ]
let count = newarray.length
return count
};
//var hammingDistance = (x, y) => (x ^ y).toString(2).split('').filter(b => b === '1').length;
