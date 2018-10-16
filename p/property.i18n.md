## CN

返回一个函数，该函数返回任何传入对象的指定属性。

|参数名|类型|说明|
|-----|----|---|
|path|string array|属性路径|
|返回值|function|目标函数|

```javascript
var obj = {a: {b: 1}};
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```