/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hA = headA;
    let hB = headB; 
    while(hA !== hB){
        hA = (hA === null) ? headB : hA.next
        hB = (hB === null) ? headA : hB.next
    }
    return hA;
};