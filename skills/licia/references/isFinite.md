## isFinite

Check if value is a finite primitive number.

<details>
<summary>Type Definition</summary>

```typescript
function isFinite(val: any): boolean;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|val   |Value to check                  |
|return|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```
