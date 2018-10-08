## CN

Stack data structure.

### clear

Clear the stack.

### push

Add an item to the stack.

|参数名|类型|说明|
|-----|----|---|
|item  |*     |Item to add |
|返回值|number|Current size|

### pop

Get the last item of the stack.

### peek

Get the last item without removing it.

### forEach

Iterate over the stack.

|参数名|类型|说明|
|-----|----|---|
|iteratee|function|Function invoked iteration|
|[ctx]   |*       |Function context          |

### toArr

Convert the stack to a JavaScript stack.

```javascript
var stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```