## convertBin

Convert binary data type.

<details>
<summary>Type Definition</summary>

```typescript
namespace convertBin {
    type Source =
        | string
        | number[]
        | ArrayBuffer
        | ArrayBufferView
        | Uint8Array;
    function blobToArrBuffer(blob: Blob): Promise<ArrayBuffer>;
}
function convertBin(
    bin: convertBin.Source,
    type: 'Uint8Array' | 'uint8array'
): Uint8Array;
function convertBin(
    bin: convertBin.Source,
    type: 'Array' | 'array'
): number[];
function convertBin(
    bin: convertBin.Source,
    type: 'ArrayBuffer' | 'arraybuffer'
): ArrayBuffer;
function convertBin(
    bin: convertBin.Source,
    type: 'base64'
): string;
function convertBin(
    bin: convertBin.Source,
    type: 'Blob' | 'blob'
): Blob;
function convertBin(
    bin: convertBin.Source,
    type: 'Buffer' | 'buffer'
): any;
function convertBin(bin: any, type: string): any;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|bin   |Binary data to convert|
|type  |Binary type           |
|return|Target binary         |

### Supported binary type

base64, ArrayBuffer, Array, Uint8Array, Blob(browser), Buffer(node)

You can not convert Blob to other types directly since it's an asynchronous process.

### blobToArrBuffer

Convert Blob to ArrayBuffer.

|Name  |Desc               |
|------|-------------------|
|blob  |Blob to convert    |
|return|ArrayBuffer promise|

```javascript
convertBin('qK6b/w==', 'Uint8Array'); // -> [168, 174, 155, 255]
convertBin.blobToArrBuffer(new Blob([])).then(arrBuffer => {
    // Do something...
});
```
