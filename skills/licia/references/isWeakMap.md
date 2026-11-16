## isWeakMap

Check if value is a WeakMap object.

<details>
<summary>Type Definition</summary>

```typescript
function isWeakMap(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```
