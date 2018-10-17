## CN

设置对象属性值。

如果路径的某一层不存在，将会创建一个空对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|val|*|要设置的值|

```javascript
var obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```