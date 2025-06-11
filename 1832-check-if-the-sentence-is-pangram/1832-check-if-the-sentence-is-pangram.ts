function checkIfPangram(sentence: string): boolean {
     
    let set = new Set(sentence)
    return set.size === 26
};