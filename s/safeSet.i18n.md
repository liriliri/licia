## CN

Set value at path of object.

If a portion of path doesn't exist, it's created.

|参数名|类型|说明|
|-----|----|---|
|obj |object      |Object to modify       |
|path|array string|Path of property to set|
|val |*           |Value to set           |

```javascript
var obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```