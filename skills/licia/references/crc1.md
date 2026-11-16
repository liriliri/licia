## crc1

CRC1 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function crc1(
    input: string | number[],
    previous?: number
): number;
```

</details>

|Name    |Desc                |
|--------|--------------------|
|input   |Data to calculate   |
|previous|Previous CRC1 result|
|return  |CRC1 result         |

```javascript
crc1('1234567890').toString(16); // -> 'd'
```
