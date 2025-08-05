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
    let hA = headA;//链表A的头节点
    let hB = headB; //链表B的头节点
    while(hA !== hB){

if (hA === null) {
    hA = headB;  // 如果 hA 走到链表A的末尾，就跳转到链表B的头节点
} else {
    hA = hA.next; // 否则，继续向后移动一步
}
        //如果 hA 走到链表A的末尾（null），就让它从 headB 重新开始。
        hB = (hB === null) ? headA : hB.next
    }
    return hA;
};








