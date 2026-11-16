## PriorityQueue

Priority queue implementation.

<details>
<summary>Type Definition</summary>

```typescript
class PriorityQueue {
    size: number;
    constructor(cmp?: types.AnyFn);
    clear(): void;
    enqueue(item: any): number;
    dequeue(): any;
    peek(): any;
}
```

</details>

### size

Queue size.

### constructor

|Name |Desc      |
|-----|----------|
|cmp  |Comparator|

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### dequeue

Retrieve and remove the highest priority item of the queue.

### peek

Same as dequeue, but does not remove the item.

```javascript
const queue = new PriorityQueue(function(a, b) {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return -1;
    return 0;
});
queue.enqueue({
    priority: 1000,
    value: 'apple'
});
queue.enqueue({
    priority: 500,
    value: 'orange'
});
queue.dequeue(); // -> { priority: 1000, value: 'apple' }
```
