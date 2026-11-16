## fileSize

Turn bytes into human readable file size.

<details>
<summary>Type Definition</summary>

```typescript
function fileSize(bytes: number): string;
function fileSize(size: string): number;
```

</details>

|Name  |Desc              |
|------|------------------|
|bytes |File bytes        |
|return|Readable file size|

Turn human readable file size into bytes.

|Name  |Desc              |
|------|------------------|
|size  |Readable file size|
|return|File bytes        |

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```
