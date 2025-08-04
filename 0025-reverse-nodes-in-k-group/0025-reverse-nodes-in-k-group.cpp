/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        //定义一个虚拟节点，避免处理边界条件
       // 创建一个值为 0 的虚拟头结点，dummy->next = head。
       //这样在处理第一个 k 组时就不用担心头节点变化的问题。
        ListNode* dummy = new ListNode(0,head);
        ListNode* groupPre = dummy; 
     //groupPre 表示当前要处理的这组 k 个节点的前一个节点。初始是 dummy
        //指向虚拟节点
//         内存中的情况：
// dummy    指向 →  [ListNode对象: val=0, next=...]
// groupPre 指向 →  [同一个ListNode对象]
// 执行 ListNode* groupPre = dummy; 后
// dummy和groupPre都指向同一个内存地址
        //从groupPre 开始走K部
        while(true){//groupPre 表示当前要处理的这组 k 个节点的前一个节点。初始是 dummy。
            ListNode* cur = groupPre;
            int kth = k;
            while (kth > 0 && cur){ 
                kth--; 
                cur = cur->next;
            }//这段代码用于检查是否还有 k 个节点可以反转。如果不足 k 个节点，则退出循环。
            if(!cur){
                //如果 cur 为 nullptr，说明剩下节点数不足 k，不需要反转，直接跳出循环。
                break; 
            }
            //cur指针指向的节点就是当前组的最后一个节点
            ListNode* groupNext = cur->next;
            //定义一个pre指针
            ListNode* pre = groupNext;
            //groupNext 是当前这组 k 个节点后面的那个节点，反转时会用到它。
            //当前组的第一个节点最终会指向groupNext
            cur = groupPre->next;
            ListNode* temp ;
            //在cur指针不等于groupnext的情况下 对当前组内的节点进行翻转
            while(cur != groupNext){
                temp = cur->next;
                //把当前节点的next指针指向pre
                        cur->next = pre;
                pre = cur;
                cur = temp;
            }
            temp = groupPre->next;
            groupPre->next = pre;
            //将groupPre移到翻转后的最后一个节点
            groupPre = temp; 
        }
        return dummy->next;
    }
};