## Queue

Queue data structure.

<details>
<summary>Type Definition</summary>

```typescript
class Queue {
    size: number;
    clear(): void;
    enqueue(item: any): number;
    dequeue(): any;
    peek(): any;
    forEach(iterator: types.AnyFn, context?: any): void;
    toArr(): any[];
}
```

</details>

### size

Queue size.

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|Name  |Desc           |
|------|---------------|
|item  |Item to enqueue|
|return|Current size   |

### dequeue

Remove the first item of the queue.

### peek

Get the first item without removing it.

### forEach

Iterate over the queue.

|Name    |Desc                      |
|--------|--------------------------|
|iterator|Function invoked iteration|
|ctx     |Function context          |

### toArr

Convert queue to a JavaScript array.

```javascript
const queue = new Queue();

console.log(queue.size); // -> 0
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // -> 2
console.log(queue.size); // -> 1
queue.peek(); // -> 3
console.log(queue.size); // -> 1
```
