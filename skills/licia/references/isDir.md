## isDir

Check if a path is directory.

<details>
<summary>Type Definition</summary>

```typescript
function isDir(path: string): Promise<boolean>;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|path  |Path to check              |
|return|True if path is a directory|

```javascript
isDir('/foo/bar');
```
