## keys

Create an array of the own enumerable property names of object.

<details>
<summary>Type Definition</summary>

```typescript
function keys(obj: any): string[];
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|obj   |Object to query        |
|return|Array of property names|

```javascript
keys({ a: 1 }); // -> ['a']
```
