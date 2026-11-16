## flatten

Recursively flatten an array.

<details>
<summary>Type Definition</summary>

```typescript
function flatten(arr: any[]): any[];
```

</details>

|Name  |Desc               |
|------|-------------------|
|arr   |Array to flatten   |
|return|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```
