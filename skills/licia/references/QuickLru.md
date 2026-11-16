## QuickLru

LRU implementation without linked list.

<details>
<summary>Type Definition</summary>

```typescript
class QuickLru {
    constructor(max: number);
    has(key: string): boolean;
    remove(key: string): void;
    get(key: string): any;
    set(key: string, val: any): void;
    clear(): void;
}
```

</details>

Inspired by the [hashlru algorithm](https://github.com/dominictarr/hashlru#algorithm).

The api is the same as Lru module.

```javascript
const cache = new QuickLru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```
