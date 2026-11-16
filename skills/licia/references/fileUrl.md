## fileUrl

Convert a file path to a file URL.

<details>
<summary>Type Definition</summary>

```typescript
function fileUrl(path: string): string;
```

</details>

|Name  |Desc     |
|------|---------|
|path  |File path|
|return|File URL |

```javascript
fileUrl('c:\\foo\\bar'); // -> 'file:///c:/foo/bar'
```
