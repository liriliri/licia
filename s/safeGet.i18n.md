## CN

Get object property, don't throw undefined error.

|参数名|类型|说明|
|-----|----|---|
|obj   |object      |Object to query          |
|path  |array string|Path of property to get  |
|返回值|*           |Target value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```