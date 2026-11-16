## crc16

CRC16 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function crc16(
    input: string | number[],
    previous?: number
): number;
```

</details>

|Name    |Desc                 |
|--------|---------------------|
|input   |Data to calculate    |
|previous|Previous CRC16 result|
|return  |CRC16 result         |

```javascript
crc16('1234567890').toString(16); // -> 'c57a'
```
