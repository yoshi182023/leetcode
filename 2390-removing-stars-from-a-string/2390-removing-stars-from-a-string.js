/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
   
     let res = [];
    for (let c of s) {
        if (c !== '*') {
            res.push(c);
        } else {
            res.pop();
        }
    }
    return res.join('');
};

 