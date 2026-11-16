## bytesToStr

Convert bytes to string.

<details>
<summary>Type Definition</summary>

```typescript
function bytesToStr(
    bytes: number[] | Uint8Array | ArrayBufferView,
    encoding?: 'utf8' | 'hex' | 'base64' | string
): string;
```

</details>

|Name         |Desc              |
|-------------|------------------|
|bytes        |Bytes array       |
|encoding=utf8|Encoding of string|
|return       |Result string     |

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```
