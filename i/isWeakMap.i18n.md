## CN

Check if value is a WeakMap object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check            |
|返回值|boolean|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```