## isWeakSet

Check if value is a WeakSet object.

<details>
<summary>Type Definition</summary>

```typescript
function isWeakSet(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakSet|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```
