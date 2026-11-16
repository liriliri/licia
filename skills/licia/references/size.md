## size

Get size of object or length of array like object.

<details>
<summary>Type Definition</summary>

```typescript
function size(obj: any): number;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|obj   |Collection to inspect|
|return|Collection size      |

```javascript
size({ a: 1, b: 2 }); // -> 2
size([1, 2, 3]); // -> 3
```
