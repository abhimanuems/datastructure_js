class TrieNode {
    constructor() {
        this.map = new Map();
    }
}

class TriePrefix {
    constructor() {
        this.root = new TrieNode();
        this.end = true;
    }

    add(string) {
        let current = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!current.map.has(string[i])) {
                const node = new TrieNode();
                current.map.set(string[i], node);
            }
            current = current.map.get(string[i]);
        }
        current.map.set(this.end, null);
    }

    search(string) {
        let current = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!current.map.has(string[i])) {
                return "not in the trie ";
            }
            current = current.map.get(string[i]);
        }
        return current.map.has(this.end);
    }

    startsWith(string) {
        let current = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!current.map.has(string[i])) {
                return "not word start with this prefix";
            }
            current = current.map.get(string[i]);
        }
        return true;
    }

    delete(string) {
        this.deleteHelper(this.root, string, 0);
    }

    deleteHelper(current, string, index) {
        if (index === string.length) {
            current.map.delete(this.end);
            return;
        }
        const char = string[index];
        if (!current.map.has(char)) {
            return "word doesn't exist";
        }
        const childNode = current.map.get(char);
        this.deleteHelper(childNode, string, index + 1);
        if (childNode.map.size === 0 && !childNode.end) {
            current.map.delete(char);
        }
    }
}

let trie = new TriePrefix();
trie.add("apple");
trie.add("orange");
console.log(trie.search("apple"));
trie.delete("apple");
console.log(trie.search("apple"));
