## isEl

Check if value is a DOM element.

<details>
<summary>Type Definition</summary>

```typescript
function isEl(val: any): val is Element;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```
