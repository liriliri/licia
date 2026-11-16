## normalizePath

Normalize file path slashes.

<details>
<summary>Type Definition</summary>

```typescript
function normalizePath(path: string): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|path  |Path to normalize|
|return|Normalized path  |

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```
