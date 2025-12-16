function recoverOrder(order: number[], friends: number[]): number[] {
 
    let pos = {}
    for(let i = 0; i < order.length; i++){
        pos[order[i]] = i
    }
    
    friends.sort((a, b) => pos[a] - pos[b])

    return friends
};