/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
    let start = prev 
    let tail = curr
    let temp = null 
    while(right > 0){
        temp = curr.next 
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