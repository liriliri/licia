## splitPath

Split path into dir, name and ext.

<details>
<summary>Type Definition</summary>

```typescript
function splitPath(
    path: string
): {
    dir: string;
    name: string;
    ext: string;
};
```

</details>

|Name  |Desc                               |
|------|-----------------------------------|
|path  |Path to split                      |
|return|Object containing dir, name and ext|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```
