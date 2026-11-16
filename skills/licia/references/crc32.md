## crc32

CRC32 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function crc32(
    input: string | number[],
    previous?: number
): number;
```

</details>

|Name    |Desc                 |
|--------|---------------------|
|input   |Data to calculate    |
|previous|Previous CRC32 result|
|return  |CRC16 result         |

```javascript
crc32('1234567890').toString(16); // -> '261daee5'
```
