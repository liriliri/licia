## CN

Shortcut for Object.freeze.

Use Object.defineProperties if Object.freeze is not supported.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to freeze|
|返回值|object|Object passed in|

```javascript
var a = {b: 1};
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```