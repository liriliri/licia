## randomBytes

Random bytes generator.

<details>
<summary>Type Definition</summary>

```typescript
function randomBytes(size: number): Uint8Array;
```

</details>

Use crypto module in node or crypto object in browser if possible.

|Name  |Desc                        |
|------|----------------------------|
|size  |Number of bytes to generate |
|return|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```
