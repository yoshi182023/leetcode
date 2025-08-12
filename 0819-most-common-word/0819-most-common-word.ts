function mostCommonWord(paragraph: string, banned: string[]): string {
    
 
 let words = paragraph.toLowerCase().split(/\W+/);
    console.log(words)
        // 2. 过滤掉 banned 中的词和空字符串（split 可能产生空项）
    const filtered = words.filter(word => word !== "" && !banned.includes(word))
    console.log(filtered)
    const frequency = {}
    for(const word of filtered){
        frequency[word] = (frequency[word] || 0) + 1
    }
    let maxcount = 0
    let result = ""
    for(const word in frequency){
        if(frequency[word] > maxcount){
         maxcount = frequency[word]
          result = word
        }
    }
    
        console.log(result)
    return result
};