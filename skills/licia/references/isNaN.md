## isNaN

Check if value is an NaN.

<details>
<summary>Type Definition</summary>

```typescript
function isNaN(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```
