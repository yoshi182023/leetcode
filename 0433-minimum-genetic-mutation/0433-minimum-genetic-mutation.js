/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */

var minMutation = function(startGene, endGene, bank) {
    let q = [[startGene, 0]]; // [currentGene, steps]
    let mutations = new Set(bank); // To check if a mutation is valid
    let visited = new Set(); // To avoid revisiting the same gene
    visited.add(startGene);

    while (q.length > 0) {
        let [currentGene, steps] = q.shift();
        
        if (currentGene === endGene) {
            return steps;
        }
        
        // Generate all possible mutations by changing one character
        for (let i = 0; i < currentGene.length; i++) {
            for (let ch of "ACGT") {
                if (ch === currentGene[i]) continue; // Skip if same character
                
                let mutatedGene = currentGene.substring(0, i) + ch + currentGene.substring(i + 1);
                
                if (mutations.has(mutatedGene) && !visited.has(mutatedGene)) {
                    visited.add(mutatedGene);
                    q.push([mutatedGene, steps + 1]);
                }
            }
        }
    }
    
    return -1;  
};