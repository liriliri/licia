## Blob

如果支持 Blob，直接返回 Blob，否则使用 BlobBuilder 进行兼容。

### constructor

|参数名|类型|说明|
|-----|----|---|
|parts|array|Blob 分片|
|[opts]|object|选项|

```javascript
var blob = new Blob([]);
```
