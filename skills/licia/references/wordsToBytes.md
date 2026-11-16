## wordsToBytes

Convert 32-bit words to bytes.

<details>
<summary>Type Definition</summary>

```typescript
function wordsToBytes(words: number[]): number[];
```

</details>

|Name  |Desc      |
|------|----------|
|words |Word array|
|return|Byte array|

```javascript
wordsToBytes([0x12345678]); // -> [0x12, 0x34, 0x56, 0x78]
```
