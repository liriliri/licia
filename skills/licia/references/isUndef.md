## isUndef

Check if value is undefined.

<details>
<summary>Type Definition</summary>

```typescript
function isUndef(val: any): val is undefined;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```
