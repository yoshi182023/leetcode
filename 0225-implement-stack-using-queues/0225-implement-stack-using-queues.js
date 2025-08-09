class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}

class MyQueue {
     constructor(val){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    enqueue(val){
        const newNode = new Node(val)
        if(!this.size){ // 如果队列为空（size=0）
            this.head= newNode
            this.tail = newNode
         } else {                      // 如果队列不为空
        this.tail.next = newNode; // (1) 当前尾节点的 next 指向新节点
        this.tail = newNode;      // (2) 更新尾指针为新节点
    }
        this.size++
    }
    dequeue(){
        if(!this.size) return null;
        let node = this.head; //保存当前的头节点（即将出队的节点）
        this.head = this.head.next //将头指针 this.head 移动到下一个节点
        node.next = null; //断开原头节点 A 的 next 指针，避免内存泄漏
        this.size--;
        return node.val // 返回被移除节点（原头节点）的值。
    }
    peek(){
        return this.head.val
    }
    empty(){ return this.size ===0 }
}
class MyStack {
    constructor() {
        this.queue = new MyQueue()
    }

    push(val) {
        let rotate = this.queue.size; //记录当前队列的长度（即新元素入队前已有的元素个数）。
        this.queue.enqueue(val)//将新元素 val 插入队列尾部 顺序为 [旧元素..旧元素, 新元素]
        while(rotate){
           this.queue.enqueue(this.queue.dequeue())//取出队列头部的旧元素
           rotate--  //将该旧元素重新插入队列尾部。
        }
    }

    pop()  {
        return this.queue.dequeue()
    }

    top() {
        return this.queue.peek()
    }

    empty()  {
        return this.queue.empty()
    }
}
