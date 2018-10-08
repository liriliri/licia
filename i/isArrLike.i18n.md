## CN

Check if value is array-like.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check             |
|返回值|boolean|True if value is array like|

> Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```