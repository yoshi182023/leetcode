var minEatingSpeed = function(piles, h) {
    let left = 1;
    let high = Math.max(...piles); // 最大堆香蕉数
    let res = high;

    while (left <= high) {
        let k = Math.floor((left + high) / 2); // 当前速度
        let hours = 0;

        for (let p of piles) {
            hours += Math.ceil(p / k);
        }

        if (hours <= h) { 
            res = Math.min(res, k); 
            high = k - 1;
        } else {
            left = k + 1;
        }
    }
    return res;
};
