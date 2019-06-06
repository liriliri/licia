## CN

二进制数据格式转换。

|参数名|类型|说明|
|-----|----|---|
|bin|*|源二进制数据|
|type|string|二进制类型|
|返回值|*|目标二进制数据|

### 支持格式

base64, ArrayBuffer, Array, Uint8Array, Blob(browser), Buffer(node)

因为将 Blob 转换为其它格式是个异步过程，所以你不能直接对它进行转换。

### blobToArrBuffer

将 Blob 类型转换为 ArrayBuffer 类型。

|参数名|类型|说明|
|-----|----|---|
|blob|Blob|Blob 数据|
|return|Promise|ArrayBuffer promise|
