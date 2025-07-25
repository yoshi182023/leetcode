/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if(head == null){
        return false; 
    }
    let slow = head; 
    let fast = head; 
    while(fast.next !== null && fast.next.next !== null){
        //只要 fast 能继续走两步，就继续循环；否则就停止。
        //确保 fast 能够再走两步，才进入下一轮循环，从而 避免访问 null 的 next，防止运行时错误。
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    return false
};