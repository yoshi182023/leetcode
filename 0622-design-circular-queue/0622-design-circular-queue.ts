class MyCircularQueue {
    private _capacity: number;
    private _elements: (number | null)[];
    private _head: number;
    private _numUsed: number;

    constructor(k: number) {
        this._capacity = k;                  // ① 实际容量（不额外浪费空间）
        this._elements = new Array(k).fill(null); // ② 初始化数组并填null 模拟C++的未初始化状态
        this._head = 0;                      // ③ 头指针初始化为0
        this._numUsed = 0;                   // ④ 当前元素计数器
    }


    enQueue(value: number): boolean {
    if (this.isFull()) return false;     // ① 检查队列是否已满
        const tail = (this._head + this._numUsed) % this._capacity; // ② 计算尾指针位置
        //(head + size) % capacity
        this._elements[tail] = value;        // ③ 在尾部插入值
        this._numUsed++;                     // ④ 元素数量+1
        return true;                         // ⑤ 返回成功
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;    // ① 检查队列是否为空
        this._head = (this._head + 1) % this._capacity; // ② 头指针循环后移
        this._numUsed--;                     // ③ 元素数量-1
        return true;                         // ④ 返回成功
    }
    

    Front(): number {
     return this.isEmpty() ? -1 : this._elements[this._head]; // ① 空队列返回-1，否则返回队首

    }

    Rear(): number {
        if (this.isEmpty()) return -1;                           // ① 空队列检查
        const tail = (this._head + this._numUsed - 1) % this._capacity; // ② 计算真实尾部位置
        return this._elements[tail];                             // ③ 返回尾部元素
    }

    isEmpty(): boolean {
        return  this._numUsed === 0;  
    }

    isFull(): boolean {
          return  this._numUsed === this._capacity;  
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */