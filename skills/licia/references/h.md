# Licia Reference: h

## HashTable

Hash table implementation.

<details>
<summary>Type Definition</summary>

```typescript
class HashTable {
    constructor(size?: number);
    set(key: string, val: any): void;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): void;
}
```

</details>

### constructor

|Name   |Desc       |
|-------|-----------|
|size=32|Bucket size|

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Value key   |
|val |Value to set|

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Value key         |
|return|Value of given key|

### has

Check if has value.

|Name  |Desc                |
|------|--------------------|
|key   |Value key           |
|return|True if value exists|

### delete

Delete value.

```javascript
const hashTable = new HashTable(128);
hashTable.set('name', 'redhoodsu');
hashTable.get('name'); // -> 'redhoodsu'
hashTable.has('name'); // -> true
hashTable.delete('name');
hashTable.has('name'); // -> false
```

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

## HeapSnapshot

V8 heap snapshot manipulator.

<details>
<summary>Type Definition</summary>

```typescript
class HeapSnapshot {
    nodes: LinkedList;
    edges: LinkedList;
    constructor(profile: any);
}
```

</details>

### constructor

|Name   |Desc            |
|-------|----------------|
|profile|Profile to parse|

### nodes

Parsed nodes.

### edges

Parsed edges.

```javascript
const fs = require('fs');
const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
const heapSnapshot = new HeapSnapshot(data);
let totalSize = 0;
heapSnapshot.nodes.forEach(node => (totalSize += node.selfSize));
console.log(totalSize);
```

## h

Create html with JavaScript.

<details>
<summary>Type Definition</summary>

```typescript
function h(
    tag: string,
    attrs?: types.PlainObj<any>,
    ...child: Array<string | HTMLElement>
): HTMLElement;
```

</details>

|Name    |Desc           |
|--------|---------------|
|tag     |Tag name       |
|attrs   |Attributes     |
|...child|Children       |
|return  |Created element|

```javascript
const el = h(
    'div#test.title',
    {
        onclick: function() {},
        title: 'test'
    },
    'inner text'
);
document.body.appendChild(el);
```

## has

Checks if key is a direct property.

<details>
<summary>Type Definition</summary>

```typescript
function has(obj: {}, key: string): boolean;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|obj   |Object to query                 |
|key   |Path to check                   |
|return|True if key is a direct property|

```javascript
has({ one: 1 }, 'one'); // -> true
```

## heapSort

Heap sort implementation.

<details>
<summary>Type Definition</summary>

```typescript
function heapSort(arr: any[], cmp?: types.AnyFn): any[];
```

</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
heapSort([2, 1]); // -> [1, 2]
```

## hex

Hex encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const hex: {
    encode(bytes: number[] | Uint8Array | ArrayBufferView): string;
    decode(str: string): number[];
};
```

</details>

### encode

Turn a byte array into a hex string.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|hex string|

### decode

Turn a hex string into a byte array.

|Name  |Desc      |
|------|----------|
|str   |hex string|
|return|Byte array|

```javascript
hex.encode([168, 174, 155, 255]); // -> 'a8ae9bff'
hex.decode('a8ae9bff'); // -> [168, 174, 155, 255]
```

## highlight

Highlight code.

<details>
<summary>Type Definition</summary>

```typescript
function highlight(
    str: string,
    lang?: string,
    style?: {
        comment?: string;
        string?: string;
        number?: string;
        keyword?: string;
        operator?: string;
    }
): string;
```

</details>

|Name   |Desc                        |
|-------|----------------------------|
|str    |Code string                 |
|lang=js|Language, js, html or css   |
|style  |Keyword highlight style     |
|return |Highlighted html code string|

Available styles:

comment, string, number, keyword, operator

```javascript
highlight('const a = 5;', 'js', {
    keyword: 'color:#569cd6;'
}); // -> '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
```

## hookFn

Monitor, change function arguments and result.

<details>
<summary>Type Definition</summary>

```typescript
function hookFn<T>(
    fn: T,
    options: {
        before?: types.AnyFn;
        after?: types.AnyFn;
        error?: types.AnyFn;
    }
): T;
```

</details>

|Name   |Desc            |
|-------|----------------|
|fn     |Function to hook|
|options|Hook options    |
|return |Hooked function |

Available options:

|Name  |Desc             |
|------|-----------------|
|before|Arguments handler|
|after |Result handler   |
|error |Error handler    |

```javascript
let sum = function(a, b) {
    if (a > 100) {
        throw Error('a is bigger than 100');
    }
    return a + b;
};
let totalSum = 0;
sum = hookFn(sum, {
    before(a, b) {
        return [+a, +b];
    },
    after(result) {
        totalSum += result;
        return totalSum;
    },
    error() {
        return totalSum;
    }
});
sum('2', '5'); // -> 7
```

## hotkey

Capture keyboard input to trigger given events.

<details>
<summary>Type Definition</summary>

```typescript
namespace hotkey {
    interface IOptions {
        element?: HTMLElement;
    }
}
const hotkey: {
    on(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
    on(key: string, listener: types.AnyFn): void;
    off(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
    off(key: string, listener: types.AnyFn): void;
};
```

</details>

### on

Register keyboard listener.

|Name    |Desc          |
|--------|--------------|
|key     |Key string    |
|options |Hotkey options|
|listener|Key listener  |

Options:

|Name            |Desc          |
|----------------|--------------|
|element=document|Target element|

### off

Unregister keyboard listener.

```javascript
const container = document.getElementById('container');
hotkey.on(
    'k',
    {
        element: container
    },
    function() {
        console.log('k is pressed');
    }
);
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb

Convert hsl to rgb.

<details>
<summary>Type Definition</summary>

```typescript
function hslToRgb(hsl: number[]): number[];
```

</details>

|Name  |Desc      |
|------|----------|
|hsl   |Hsl values|
|return|Rgb values|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## html

Html parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
const html: {
    parse(html: string): any[];
    stringify(tree: any[]): string;
};
```

</details>

### parse

Parse html string into js object.

|Name  |Desc            |
|------|----------------|
|html  |Html string     |
|return|Parsed js object|

### stringify

Stringify object into an html string.

|Name  |Desc               |
|------|-------------------|
|tree  |Object to stringify|
|return|Html string        |

```javascript
const tree = html.parse('<div id="name">licia</div>');
// -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
html.stringify(tree);
```
