## CN

Compress image using canvas.

|参数名|类型|说明|
|-----|----|---|
|file|File Blob|Image file|
|opts|object   |Options   |
|cb  |function |Callback  |

Available options:

|参数名|类型|说明|
|-----|----|---|
|maxWidth   |number|Max width                       |
|maxHeight  |number|Max height                      |
|width      |number|Output image width              |
|height     |number|Output image height             |
|mineType   |string|Mine type                       |
|quality=0.8|number|Image quality, range from 0 to 1|

In order to keep image ratio, height will be ignored when width is set.

And maxWith, maxHeight will be ignored if width or height is set.

```javascript
compressImg(file, {
    maxWidth: 200
}, function (err, file) 
{
    // ...
});
```