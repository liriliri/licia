## LinkedList

Doubly-linked list implementation.

<details>
<summary>Type Definition</summary>

```typescript
namespace LinkedList {
    class Node {
        value: any;
        prev: Node | null;
        next: Node | null;
    }
}
class LinkedList {
    size: number;
    head: LinkedList.Node;
    tail: LinkedList.Node;
    push(val: any): number;
    pop(): any;
    unshift(val: any): number;
    shift(): any;
    find(fn: types.AnyFn): LinkedList.Node | void;
    delNode(node: LinkedList.Node): void;
    forEach(iterator: types.AnyFn, ctx?: any);
    toArr(): any[];
}
```

</details>

### size

List size.

### head.

First node.

### tail

Last node.

### push

Add an value to the end of the list.

|Name  |Desc         |
|------|-------------|
|val   |Value to push|
|return|Current size |

### pop

Get the last value of the list.

### unshift

Add an value to the head of the list.

### shift

Get the first value of the list.

### rmNode

Remove node.

### find

Find node.

|Name  |Desc                             |
|------|---------------------------------|
|fn    |Function invoked per iteration   |
|return|First value that passes predicate|

### forEach

Iterate over the list.

### toArr

Convert the list to a JavaScript array.

```javascript
const linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```
