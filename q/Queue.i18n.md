## CN

Queue data structure.

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|参数名|类型|说明|
|-----|----|---|
|item  |*     |Item to enqueue|
|返回值|number|Current size   |

### dequeue

Remove the first item of the queue.

### peek

Get the first item without removing it.

### forEach

Iterate over the queue.

|参数名|类型|说明|
|-----|----|---|
|iteratee|function|Function invoked iteration|
|[ctx]   |*       |Function context          |

### toArr

Convert queue to a JavaScript array.

```javascript
var queue = new Queue();

console.log(queue.size); // -> 0
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // -> 2
console.log(queue.size); // -> 1
queue.peek(); // -> 3
console.log(queue.size); // -> 1
```