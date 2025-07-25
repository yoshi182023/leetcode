 function insertionSortList(head: ListNode | null): ListNode | null {
      if (head === null) {
         return head;
     }
     //dummyHead(0) → 2 → 1 → 4 → 3 → null
        const dummyHead = new ListNode(0);
     dummyHead.next = head;//next node is our real head of our linked list
 //handle edge cases 
 //keep tracking of 2 pointers
  let prev = head, curr = head.next;
// - curr: current node being inserted
//  prev: 2 (head)2 → 1 → 4 → 3 
// curr: 1 (head.next)2 → 1 → 4 → 3 → null
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
     }else{         // Need to find the correct position to insert current node
         //if it's not the case 
         //we want to start from the beginning of the linked list
         let temp = dummyHead //dummyHead(0) 
         while( temp.next !== null && curr.val > temp.next.val){ // temp.next.val = dummyHead(0) → 2
             temp = temp.next
         }
         // Perform the insertion:
        // 1. Remove current node from its original position
         prev.next = curr.next //2 → 2.next = 4
         curr.next = temp.next //1.next = 2
        //  dummyHead(0) → 2 → 1 → 4 → 3 → null
        //    ↑                ↑
        //   temp             curr
        //   (dummyHead) (值为1的节点)
         temp.next = curr  //即：dummyHead.next = 1
         curr = prev.next
     }
   
  }
 
   return dummyHead.next 
 
 
 };