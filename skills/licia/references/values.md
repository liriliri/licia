## values

Create an array of the own enumerable property values of object.

<details>
<summary>Type Definition</summary>

```typescript
function values(obj: any): any[];
```

</details>

|Name  |Desc                    |
|------|------------------------|
|obj   |Object to query         |
|return|Array of property values|

```javascript
values({ one: 1, two: 2 }); // -> [1, 2]
```
