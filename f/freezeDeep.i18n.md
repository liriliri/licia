## CN

递归进行 Object.freeze。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|object|目标对象|

```javascript
var a = {b: {c: 1}};
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```