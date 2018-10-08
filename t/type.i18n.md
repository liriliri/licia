## CN

Determine the internal JavaScript [[Class]] of an object.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to get type         |
|返回值|string|Type of object, lowercased|

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function () {}); // -> 'function'
type([]); // -> 'array'
```