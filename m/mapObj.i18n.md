## CN

Map for objects.

|参数名|类型|说明|
|-----|----|---|
|obj     |object  |Object to iterate over        |
|iteratee|function|Function invoked per iteration|
|[ctx]   |*       |Function context              |
|返回值  |object  |New mapped object             |

```javascript
mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
```