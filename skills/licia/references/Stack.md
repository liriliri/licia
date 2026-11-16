## Stack

Stack data structure.

<details>
<summary>Type Definition</summary>

```typescript
class Stack {
    size: number;
    clear(): void;
    push(item: any): number;
    pop(): any;
    peek(): any;
    forEach(iterator: types.AnyFn, context?: any): void;
    toArr(): any[];
}
```

</details>

### size

Stack size.

### clear

Clear the stack.

### push

Add an item to the stack.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### pop

Get the last item of the stack.

### peek

Get the last item without removing it.

### forEach

Iterate over the stack.

|Name    |Desc                      |
|--------|--------------------------|
|iterator|Function invoked iteration|
|ctx     |Function context          |

### toArr

Convert the stack to a JavaScript array.

```javascript
const stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```
