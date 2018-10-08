## CN

Return a function that will itself return the key property of any passed-in object.

|参数名|类型|说明|
|-----|----|---|
|path  |string array|Path of the property to get|
|返回值|function    |New accessor function      |

```javascript
var obj = {a: {b: 1}};
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```