/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const inDegree = new Array(n).fill(0);
    //for (let i = 0; i < edges.length; i++) {
        for (const [from, to] of edges) {
      //  const from = edges[i][0];
        //console.log("from",from)
      //  const to = edges[i][1];//console.log("to",to)
        inDegree[to]++;
       // console.log(inDegree)
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            result.push(i);
        }
    }
    return result;
};