## CN

Doubly-linked list implementation.

### push

Add an value to the end of the list.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to push|
|返回值|number|Current size |

### pop

Get the last value of the list.

### unshift

Add an value to the head of the list.

### shift

Get the first value of the list.

### forEach

Iterate over the list.

### toArr

Convert the list to a JavaScript array.

```javascript
var linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```