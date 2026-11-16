## safeSet

Set value at path of object.

<details>
<summary>Type Definition</summary>

```typescript
function safeSet(
    obj: any,
    path: string | string[],
    val: any
): void;
```

</details>

If a portion of path doesn't exist, it's created.

|Name|Desc                   |
|----|-----------------------|
|obj |Object to modify       |
|path|Path of property to set|
|val |Value to set           |

```javascript
const obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```
