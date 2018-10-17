## CN

删除对象属性。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|返回值|*|删除值或 undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```