## isArrLike

Check if value is array-like.

<details>
<summary>Type Definition</summary>

```typescript
function isArrLike(val: any): boolean;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is array like|

Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```
