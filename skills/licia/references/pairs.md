## pairs

Convert an object into a list of [key, value] pairs.

<details>
<summary>Type Definition</summary>

```typescript
function pairs(obj: any): Array<any[]>;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|obj   |Object to convert         |
|return|List of [key, value] pairs|

```javascript
pairs({ a: 1, b: 2 }); // -> [['a', 1], ['b', 2]]
```
