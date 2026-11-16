## base64

Basic base64 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const base64: {
    encode(bytes: number[] | Uint8Array | ArrayBufferView): string;
    decode(str: string): number[];
};
```

</details>

### encode

Turn a byte array into a base64 string.

|Name  |Desc         |
|------|-------------|
|bytes |Byte array   |
|return|Base64 string|

### decode

Turn a base64 string into a byte array.

|Name  |Desc         |
|------|-------------|
|str   |Base64 string|
|return|Byte array   |

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```
