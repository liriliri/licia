## Lru

Simple LRU cache.

<details>
<summary>Type Definition</summary>

```typescript
class Lru {
    constructor(max: number);
    has(key: string): boolean;
    remove(key: string): void;
    get(key: string): any;
    set(key: string, val: any): void;
    clear(): void;
}
```

</details>

### constructor

|Name|Desc              |
|----|------------------|
|max |Max items in cache|

### has

Check if has cache.

|Name  |Desc                |
|------|--------------------|
|key   |Cache key           |
|return|True if value exists|

### remove

Remove cache.

|Name  |Desc     |
|------|---------|
|key   |Cache key|

### get

Get cache value.

|Name  |Desc       |
|------|-----------|
|key   |Cache key  |
|return|Cache value|

### set

Set cache.

|Name  |Desc       |
|------|-----------|
|key   |Cache key  |
|val   |Cache value|

### clear

Clear cache.

```javascript
const cache = new Lru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```
