function checkIfPangram(sentence: string): boolean {
     
        let arr = sentence.split('')
    let set = new Set(arr)
    return set.size === 26
};