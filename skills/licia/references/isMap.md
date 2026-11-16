## isMap

Check if value is a Map object.

<details>
<summary>Type Definition</summary>

```typescript
function isMap(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```
