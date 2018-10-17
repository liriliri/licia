## CN

栈数据结构。

### clear

清空栈。

### push

元素入栈。

|参数名|类型|说明|
|-----|----|---|
|item|*|入栈元素|
|返回值|number|当前大小|

### pop

元素出栈。

### peek

获取最后一个元素但不移除它。

### forEach

遍历栈。

|参数名|类型|说明|
|-----|----|---|
|iteratee|function|调用函数|
|[ctx]|*|函数上下文|

### toArr

将栈转换为 JavaScript 数组。

```javascript
var stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```