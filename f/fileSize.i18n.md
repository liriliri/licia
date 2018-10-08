## CN

Turn bytes into human readable file size.

|参数名|类型|说明|
|-----|----|---|
|bytes |number|File bytes        |
|返回值|string|Readable file size|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```