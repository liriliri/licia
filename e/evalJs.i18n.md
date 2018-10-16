## CN

在指定的上下文执行 js 代码。

|参数名|类型|说明|
|-----|----|---|
|js|string|JavaScript 代码|
|ctx=global|object|上下文|

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', {a: 2}); // -> 2
```