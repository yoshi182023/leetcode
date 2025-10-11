class TrieNode {
    children: TrieNode[];
    word: boolean;

    constructor() {
        this.children = Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    private getIndex(c: string): number {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    addWord(word: string): void {
        let cur = this.root;
        for (const c of word) {
            const idx = this.getIndex(c);
            if (cur.children[idx] === null) {
                cur.children[idx] = new TrieNode();
            }
            cur = cur.children[idx];
        }
        cur.word = true;
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }

    private dfs(word: string, j: number, node: TrieNode): boolean {
        let cur = node;

        for (let i = j; i < word.length; i++) {
            const c = word[i];
            if (c === '.') {
                for (const child of cur.children) {
                    if (child !== null && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const idx = this.getIndex(c);
                if (cur.children[idx] === null) {
                    return false;
                }
                cur = cur.children[idx];
            }
        }
        return cur.word;
    }
}
