
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head
    let prev = null
    while (left > 1){
        prev = curr
        curr = curr.next 
        left--;
        right--
    }
// 反转区间的长度是 right - left + 1。
// 当我们把 curr 移动到第 left 个节点时，已经往前走了 (left-1) 步。
// 这时候，如果还保持原来的 right，那么反转的长度会变大。
// 所以要同时 right--，保持区间长度不变。
    let start = prev 
    let tail = curr
    let temp = null 
    while(right > 0){
        console.log("right",right)
        temp = curr.next 
         console.log("temp",temp)
        curr.next = prev
        prev = curr
        curr = temp 
        right--
    }
    if(start !== null){
        start.next = prev

    }else{
        head = prev
    }
    tail.next = curr
    return head
};