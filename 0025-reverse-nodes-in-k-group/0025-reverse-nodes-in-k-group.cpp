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
        ListNode* dummy = new ListNode(0, head);
        ListNode* groupPre = dummy;

        while (true) {
            ListNode* cur = groupPre;
            for (int i = 0; i < k && cur; i++) {
                cur = cur->next;
            }
            if (!cur) break;

            ListNode* groupNext = cur->next;
            ListNode* prev = groupNext;
            cur = groupPre->next;

            while (cur != groupNext) {
                ListNode* tmp = cur->next;
                cur->next = prev;
                prev = cur;
                cur = tmp;
            }

            ListNode* tmp = groupPre->next;
            groupPre->next = prev;
            groupPre = tmp;
        }

        return dummy->next;
    }
};
