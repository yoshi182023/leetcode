function stringHash(s: string, k: number): string {
    /**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 
    let result = '';
    const n = s.length;
    
    for (let i = 0; i < n; i += k) {
        const substring = s.slice(i, i + k);
        let total = 0;
        
        for (const char of substring) {
            const hashVal = char.charCodeAt(0) - 'a'.charCodeAt(0);
            total += hashVal;
        }
        
        const hashedChar = total % 26;
        result += String.fromCharCode(hashedChar + 'a'.charCodeAt(0));
    }
    
    return result;

};