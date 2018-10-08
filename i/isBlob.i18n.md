## CN

Check if value is a Blob.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is a Blob|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```