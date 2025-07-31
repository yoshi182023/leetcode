class LRUCache {
     private capacity: number;
private map: Map<number, number>;
    constructor(capacity: number) {
     this.capacity = capacity;

        this.map = new Map();
    }

    get(key: number): number {
        if(this.map.has(key)){
            let val = this.map.get(key);
            this.map.delete(key)
            this.map.set(key, val)
            return val
        }else{
            return -1; 
        }
    }

    put(key: number, value: number): void {
        if(this.get(key) === -1){//is not in there 
    // 如果当前 key 不在 cache 中
                if(this.capacity === this.map.size){
                    //remove the leftmost element, which is the first element
                    for(let keyVal of this.map){
                        this.map.delete(keyVal[0])
                        break 
                    }
                }
        }
        this.map.set(key, value);          // 更新或插入 key
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */