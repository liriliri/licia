## isNil

Check if value is null or undefined, the same as value == null.

<details>
<summary>Type Definition</summary>

```typescript
function isNil(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is null or undefined|

```javascript
isNil(null); // -> true
isNil(void 0); // -> true
isNil(undefined); // -> true
isNil(false); // -> false
isNil(0); // -> false
isNil([]); // -> false
```
