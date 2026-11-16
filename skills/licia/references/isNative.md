## isNative

Check if value is a native function.

<details>
<summary>Type Definition</summary>

```typescript
function isNative(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is a native function|

```javascript
isNative(function() {}); // -> false
isNative(Math.min); // -> true
```
