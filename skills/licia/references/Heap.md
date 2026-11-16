## Heap

Heap implementation.

<details>
<summary>Type Definition</summary>

```typescript
class Heap {
    size: number;
    constructor(cmp?: types.AnyFn);
    clear(): void;
    add(item: any): number;
    poll(): any;
    peek(): any;
}
```

</details>

### size

Heap size.

### constructor

|Name|Desc      |
|----|----------|
|cmp |Comparator|

### clear

Clear the heap.

### add

Add an item to the heap.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### poll

Retrieve and remove the root item of the heap.

### peek

Same as poll, but does not remove the item.

```javascript
const heap = new Heap(function(a, b) {
    return b - a;
});
heap.add(2);
heap.add(1);
heap.add(4);
heap.add(5);
heap.poll(); // -> 5
console.log(heap.size); // -> 4
```
