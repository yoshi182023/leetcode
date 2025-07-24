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
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    console.log(lists)//[ [1,4,5], [1,3,4], [2,6] ]
    if(lists.length === 0 ){
        return null; 
    }
    while (lists.length > 1) { //we have 2 lists 
        let list1 = lists.shift()
       // console.log(list1)//[1,4,5]
        let list2 = lists.shift()//
               //[1,3,4] console.log(list2)
             //[ [2,6] ]   console.log(lists)
        let merged = mergeLists(list1,list2)
            lists.push(merged); // 将合并后的链表放回数组末尾

    }
    return lists[0]
};

function mergeLists(list1, list2){
    let dummy = new ListNode(0);
   // a head is used as a reference and it will be set to dummy 
    let head = dummy
    while (list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1
            list1 = list1.next
        }else{
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next //update dummy to dummy.next
        //becasue we need to add the next value from one of these list to the tail of dummy 

    }
    if(list1 === null){
        dummy.next = list2
    }else{
        dummy.next = list1
    }
    return head.next
}









