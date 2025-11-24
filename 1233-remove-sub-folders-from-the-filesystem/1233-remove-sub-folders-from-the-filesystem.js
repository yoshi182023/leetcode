/**
 * @param {string[]} folder
 * @return {string[]}
 */
class TrieNode {
    constructor() {
        this.is_end = false;
        this.children = {};
    }
}

var removeSubfolders = function(folder) {
    const root = new TrieNode();
    const result = [];

    folder.sort(); // 先排序，保证父文件夹在子文件夹前

    for (const path of folder) {
        const parts = path.split("/").filter(Boolean);
        let node = root;
        let skip = false;

        for (const part of parts) {
            if (!node.children[part]) node.children[part] = new TrieNode();
            node = node.children[part];
            if (node.is_end) { 
                skip = true; 
                break; 
            }
        }

        if (!skip) {
            node.is_end = true;
            result.push(path);
        }
    }

    return result;
};
