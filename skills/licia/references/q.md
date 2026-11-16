# Licia Reference: q

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

## query

Parse and stringify url query strings.

<details>
<summary>Type Definition</summary>

```typescript
const query: {
    parse(str: string): Record<string, string | string[]>;
    stringify(object: any): string;
};
```

</details>

### parse

Parse a query string into an object.

|Name  |Desc        |
|------|------------|
|str   |Query string|
|return|Query object|

### stringify

Stringify an object into a query string.

|Name  |Desc        |
|------|------------|
|obj   |Query object|
|return|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({ foo: 'bar', eruda: 'true' }); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort

Quick sort implementation.

<details>
<summary>Type Definition</summary>

```typescript
function quickSort(arr: any[], cmp?: types.AnyFn): any[];
```

</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
quickSort([2, 1]); // -> [1, 2]
```
