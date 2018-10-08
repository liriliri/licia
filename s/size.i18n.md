## CN

Get size of object, length of array like object or the number of keys.

|参数名|类型|说明|
|-----|----|---|
|obj   |array object|Collection to inspect|
|返回值|number      |Collection size      |

```javascript
size({a: 1, b: 2}); // -> 2
size([1, 2, 3]); // -> 3
```