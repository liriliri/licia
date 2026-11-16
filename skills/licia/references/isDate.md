## isDate

Check if value is classified as a Date object.

<details>
<summary>Type Definition</summary>

```typescript
function isDate(val: any): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |value to check                |
|return|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```
