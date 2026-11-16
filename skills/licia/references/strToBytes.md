## strToBytes

Convert string into bytes.

<details>
<summary>Type Definition</summary>

```typescript
function strToBytes(
    str: string,
    encoding?: 'utf8' | 'hex' | 'base64' | string
): number[];
```

</details>

|Name         |Desc              |
|-------------|------------------|
|str          |String to convert |
|encoding=utf8|Encoding of string|
|return       |Bytes array       |

Supported encoding: utf8, hex, base64

```javascript
strToBytes('licia'); // -> [108, 105, 99, 105, 97]
strToBytes('qK6b/w==', 'base64'); // -> [168, 174, 155, 255]
```
