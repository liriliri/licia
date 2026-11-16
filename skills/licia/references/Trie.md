## Trie

Trie data structure.

<details>
<summary>Type Definition</summary>

```typescript
class Trie {
    add(word: string): void;
    remove(word: string): void;
    has(word: string): boolean;
    words(prefix: string): string[];
    clear(): void;
}
```

</details>

### add

Add a word to trie.

|Name|Desc       |
|----|-----------|
|word|Word to add|

### remove

Remove a word from trie.

### has

Check if word exists.

### words

Get all words with given Prefix.

|Name  |Desc                   |
|------|-----------------------|
|prefix|Word prefix            |
|return|Words with given Prefix|

### clear

Clear all words from trie.

```javascript
const trie = new Trie();
trie.add('carpet');
trie.add('car');
trie.add('cat');
trie.add('cart');
trie.has('cat'); // -> true
trie.remove('carpet');
trie.has('carpet'); // -> false
trie.words('car'); // -> ['car', 'cart']
trie.clear();
```
