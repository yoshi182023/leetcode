function countSegments(s: string): number {
    

    let arr = s.split(" ").filter(word => word !== "")
    return arr.length
};