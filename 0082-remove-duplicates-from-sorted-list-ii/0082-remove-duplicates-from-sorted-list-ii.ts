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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    

    if(!head) return null
    let dummy = new ListNode(-Infinity,head)
    let curr = head 
    let prev = dummy
    let next = curr.next
    while(curr){
    if(curr && next && curr.val === next.val ){
        while(next && curr.val === next.val){
            next = next.next; 
        }
        prev.next = next 
        curr = next 
        next = next ? next.next : null
        
    }else{
        prev = curr 
        curr =curr.next
        next = next? next.next :null
    }
    }

    return dummy.next

};