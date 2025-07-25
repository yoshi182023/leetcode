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
function insertionSortList(head: ListNode | null): ListNode | null {
     if (head === null) {
        return head;
    }
        const dummyHead = new ListNode(0);
    dummyHead.next = head;//next node is our real head of our linked list
//handle edge cases 
//keep tracking of 2 pointers
 let prev = head, curr = head.next;
     // - curr: current node being inserted

//start checking until we reach the end of the linked list 
 while (curr !== null) {
    //maybe it is already in order 
                // Current node is already in correct position

    if(curr.val >= prev.val){
        //continute to the next iteration of the loop 
        //update the previous and current pointers
        prev = curr
        curr = curr.next
        continue 
    }else{            // Need to find the correct position to insert current node
        //if it's not the case 
        //we want to start from the beginning of the linked list
        let temp = dummyHead
        while( temp.next !== null && curr.val > temp.next.val){
            temp = temp.next
        }
        // Perform the insertion:
       // 1. Remove current node from its original position
        prev.next = curr.next
        curr.next = temp.next 
        temp.next = curr
        curr = prev.next
    }
  
 }




  return dummyHead.next 



};