## CN

使用 canvas 对图像进行压缩。

|参数名|类型|说明|
|-----|----|---|
|file|File Blob|图片文件|
|opts|object|选项|
|cb|function|回调|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|maxWidth|number|最大宽度|
|maxHeight|number|最大高度|
|width|number|输出图片宽度|
|height|number|输出图片高度|
|mineType|string|Mine 类型|
|quality=0.8|number|图片质量，从 0 到 1|

为了保持图片比例，当宽度设置时高度将被忽略。

如果设置了宽高，最大宽度跟最大高度将被忽略。

```javascript
compressImg(file, {
    maxWidth: 200
}, function (err, file) {
    // ...
});
```