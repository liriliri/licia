## hex

Hex encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const hex: {
    encode(bytes: number[] | Uint8Array | ArrayBufferView): string;
    decode(str: string): number[];
};
```

</details>

### encode

Turn a byte array into a hex string.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|hex string|

### decode

Turn a hex string into a byte array.

|Name  |Desc      |
|------|----------|
|str   |hex string|
|return|Byte array|

```javascript
hex.encode([168, 174, 155, 255]); // -> 'a8ae9bff'
hex.decode('a8ae9bff'); // -> [168, 174, 155, 255]
```
