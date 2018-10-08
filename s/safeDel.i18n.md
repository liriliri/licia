## CN

Delete object property.

|参数名|类型|说明|
|-----|----|---|
|obj   |object      |Object to query           |
|path  |array string|Path of property to delete|
|返回值|*           |Deleted value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```