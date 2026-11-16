## isSet

Check if value is a Set object.

<details>
<summary>Type Definition</summary>

```typescript
function isSet(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```
