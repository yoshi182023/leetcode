
var decodeMessage = function(key, message) {
     let map = {' ': ' '}
    let charCode = 'a'.charCodeAt(0);
    for(let i = 0; i < key.length; i++){
        const char = key[i]
//map[char] === undefined
// 只处理 第一次出现的字母
        if(map[char] === undefined ){
            console.log("charcode", charCode)
             console.log(String.fromCharCode(charCode))
            map[char] = String.fromCharCode(charCode)
            //console.log("map[char]",map[char])

            charCode += 1;
        }
    }
    let output = '';
    for(let i = 0;i < message.length; i++){
        const char = message[i]
        output +=  map[char]
    }
    return output
};