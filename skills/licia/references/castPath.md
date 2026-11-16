## castPath

Cast value into a property path array.

<details>
<summary>Type Definition</summary>

```typescript
function castPath(path: string | string[], obj?: any): string[];
```

</details>

|Name  |Desc               |
|------|-------------------|
|path  |Value to inspect   |
|obj   |Object to query    |
|return|Property path array|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', { 'a.b.c': true }); // -> ['a.b.c']
```
