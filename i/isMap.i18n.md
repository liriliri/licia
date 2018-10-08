## CN

Check if value is a Map object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check        |
|返回值|boolean|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```