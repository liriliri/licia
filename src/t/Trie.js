/* Trie data structure.
 *
 * ### add
 *
 * Add a word to trie.
 *
 * |Name|Desc       |
 * |----|-----------|
 * |word|Word to add|
 *
 * ### remove
 *
 * Remove a word from trie.
 *
 * ### has
 *
 * Check if word exists.
 *
 * ### words
 *
 * Get all words with given Prefix.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |prefix|Word prefix            |
 * |return|Words with given Prefix|
 *
 * ### clear
 *
 * Clear all words from trie.
 */

/* example
 * const trie = new Trie();
 * trie.add('carpet');
 * trie.add('car');
 * trie.add('cat');
 * trie.add('cart');
 * trie.has('cat'); // -> true
 * trie.remove('carpet');
 * trie.has('carpet'); // -> false
 * trie.words('car'); // -> ['car', 'cart']
 * trie.clear();
 */

/* module
 * env: all
 * since: 1.25.0
 */

/* typescript
 * export declare class Trie {
 *     add(word: string): void;
 *     remove(word: string): void;
 *     has(word: string): boolean;
 *     words(prefix: string): string[];
 *     clear(): void;
 * }
 */

_('Class each');

// https://chromium.googlesource.com/devtools/devtools-frontend/+/refs/heads/master/front_end/common/Trie.js
exports = Class({
    initialize: function Trie() {
        this.clear();
    },
    add(word) {
        const edges = this._edges;
        let node = this._root;
        this._wordsInSubtree[node]++;
        for (let i = 0, len = word.length; i < len; i++) {
            const edge = word[i];
            let next = edges[node][edge];
            if (!next) {
                if (this._freeNodes.length) {
                    next = this._freeNodes.pop();
                } else {
                    next = this._idx++;
                    this._isWord.push(false);
                    this._wordsInSubtree.push(0);
                    edges.push({});
                }
                edges[node][edge] = next;
            }
            this._wordsInSubtree[next]++;
            node = next;
        }
        this._isWord[node] = true;
    },
    remove(word) {
        if (!this.has(word)) {
            return;
        }

        let node = this._root;
        this._wordsInSubtree[node]--;
        for (let i = 0, len = word.length; i < len; i++) {
            const edge = word[i];
            const next = this._edges[node][edge];
            if (!--this._wordsInSubtree[next]) {
                delete this._edges[node][edge];
                this._freeNodes.push(next);
            }
            node = next;
        }
        this._isWord[node] = false;
    },
    has(word) {
        let node = this._root;
        for (let i = 0, len = word.length; i < len; i++) {
            node = this._edges[node][word[i]];
            if (!node) {
                return false;
            }
        }

        return this._isWord[node];
    },
    words(prefix) {
        let node = this._root;
        for (let i = 0, len = prefix.length; i < len; i++) {
            node = this._edges[node][prefix[i]];
            if (!node) {
                return [];
            }
        }
        const result = [];
        this._dfs(node, prefix, result);

        return result;
    },
    clear() {
        this._idx = 1;
        this._root = 0;
        this._edges = [{}];
        this._isWord = [false];
        this._wordsInSubtree = [0];
        this._freeNodes = [];
    },
    _dfs(node, prefix, result) {
        if (this._isWord[node]) {
            result.push(prefix);
        }
        const edges = this._edges[node];
        each(edges, (node, edge) => this._dfs(node, prefix + edge, result));
    }
});
