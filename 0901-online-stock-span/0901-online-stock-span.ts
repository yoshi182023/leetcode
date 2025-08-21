


var StockSpanner = function() {
    this.stack = []// 栈存 [price, span]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1
    while(this.stack.length > 0  && this.stack[this.stack.length-1][0] <= price){
        span += this.stack[this.stack.length-1][1]
        this.stack.pop()
    }
     // 把当前价格和跨度入栈
    this.stack.push([price, span])
    console.log(this.stack)

    // 返回跨度
    console.log("re",span)
    return span

};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */