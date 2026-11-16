## fileType

Detect file type using magic number.

<details>
<summary>Type Definition</summary>

```typescript
function fileType(
    input: Buffer | ArrayBuffer | Uint8Array
):
    | {
          ext: string;
          mime: string;
      }
    | undefined;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|input |File input                    |
|return|Object containing ext and mime|

### Supported file types

jpg, png, gif, webp, bmp, gz, zip, rar, pdf, exe

```javascript
const fs = require('fs');
const file = fs.readFileSync('path/to/file');
console.log(fileType(file)); // -> { ext: 'jpg', mime: 'image/jpeg' }
```
