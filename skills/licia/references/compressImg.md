## compressImg

Compress image using canvas.

<details>
<summary>Type Definition</summary>

```typescript
function compressImg(
    file: File | Blob | string,
    cb: types.AnyFn
): void;
function compressImg(
    file: File | Blob | string,
    options?: {
        maxWidth?: number;
        maxHeight?: number;
        width?: number;
        height?: number;
        mimeType?: string;
        quality?: number;
    },
    cb?: types.AnyFn
): void;
```

</details>

|Name   |Desc             |
|-------|-----------------|
|file   |Image file or url|
|options|Options          |
|cb     |Callback         |

Available options:

|Name       |Desc                            |
|-----------|--------------------------------|
|maxWidth   |Max width                       |
|maxHeight  |Max height                      |
|width      |Output image width              |
|height     |Output image height             |
|mimeType   |Mime type                       |
|quality=0.8|Image quality, range from 0 to 1|

In order to keep image ratio, height will be ignored when width is set.

And maxWith, maxHeight will be ignored if width or height is set.

```javascript
const file = new Blob([]);
compressImg(
    file,
    {
        maxWidth: 200
    },
    function(err, file) {
        // ...
    }
);
```
