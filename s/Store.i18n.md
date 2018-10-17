## CN

内存存储。

继承自 Emitter 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|data|object|初始数据|

### set

设置值。

|参数名|类型|说明|
|-----|----|---|
|key|string|键名|
|val|*|键值|

设置多个值。

|参数名|类型|说明|
|-----|----|---|
|vals|object|包含多个键值对的对象|

该方法被调用时发触发 change 事件。

### get

获取值。

|参数名|类型|说明|
|-----|----|---|
|key|string|键名|
|返回值|*|键值|

获取多个值。

|参数名|类型|说明|
|-----|----|---|
|keys|array|键名列表|
|返回值|object|包含多个键值对的对象|

### remove

移除值。

|参数名|类型|说明|
|-----|----|---|
|key|string array|键名|

### clear

清空数据。

### each

遍历数据。

|参数名|类型|说明|
|-----|----|---|
|fn|function|遍历函数|

```javascript
var store = new Store('test');
store.set('user', {name: 'licia'});
store.get('user').name; // -> 'licia'
store.clear();
store.each(function (val, key) {
    // Do something.
});
store.on('change', function (key, newVal, oldVal) {
    // It triggers whenever set is called.
});
```