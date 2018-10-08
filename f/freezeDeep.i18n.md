## CN

Recursively use Object.freeze.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to freeze|
|返回值|object|Object passed in|

```javascript
var a = {b: {c: 1}};
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```