## isMatch

Check if keys and values in src are contained in obj.

<details>
<summary>Type Definition</summary>

```typescript
function isMatch(obj: any, src: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|obj   |Object to inspect                 |
|src   |Object of property values to match|
|return|True if object is match           |

```javascript
isMatch({ a: 1, b: 2 }, { a: 1 }); // -> true
```
