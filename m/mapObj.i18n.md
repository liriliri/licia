## CN

类似 map，但针对对象，生成一个新对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|源对象|
|iteratee|function|转换函数|
|[ctx]|*|函数上下文|
|返回值|object|目标对象|

```javascript
mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
```