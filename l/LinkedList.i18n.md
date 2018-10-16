## CN

双向链表实现。

### push

向链表尾部添加值。

|参数名|类型|说明|
|-----|----|---|
|val|*|要添加的值|
|返回值|number|链表大小|

### pop

获取链表尾部值。

### unshift

向链表头部添加值。

### shift

获取链表头部值。

### forEach

遍历链表。

### toArr

将链表转换成 JavaScript 数组。

```javascript
var linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```