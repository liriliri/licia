## CN

获取对象属性值，路径不存在时不报错。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|返回值|*|属性值或 undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```