## CN

创建一个函数，只有在调用 n 次后才会调用一次。

|参数名|类型|说明|
|-----|----|---|
|n|number|调用次数|
|fn|function|源函数|
|返回值|function|输出函数|

```javascript
var fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```
