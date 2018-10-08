## CN

Check if value is null or undefined, the same as value == null.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value is null or undefined|

```javascript
isNil(null); // -> true
isNil(void 0); // -> true
isNil(undefined); // -> true
isNil(false); // -> false
isNil(0); // -> false
isNil([]); // -> false
```