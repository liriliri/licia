## crc8

CRC8 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function crc8(
    input: string | number[],
    previous?: number
): number;
```

</details>

|Name    |Desc                |
|--------|--------------------|
|input   |Data to calculate   |
|previous|Previous CRC8 result|
|return  |CRC8 result         |

```javascript
crc8('1234567890').toString(16); // -> '52'
```
