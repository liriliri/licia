## bytesToWords

Convert bytes to 32-bit words.

<details>
<summary>Type Definition</summary>

```typescript
function bytesToWords(bytes: number[]): number[];
```

</details>

Useful when using CryptoJS.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|Word array|

```javascript
bytesToWords([0x12, 0x34, 0x56, 0x78]); // -> [0x12345678]
```
