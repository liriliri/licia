## download

Trigger a file download on client side.

<details>
<summary>Type Definition</summary>

```typescript
function download(
    data: Blob | File | string | any[],
    name: string,
    type?: string
): void;
```

</details>

|Name           |Desc            |
|---------------|----------------|
|data           |Data to download|
|name           |File name       |
|type=text/plain|Data type       |

```javascript
download('test', 'test.txt');
```
