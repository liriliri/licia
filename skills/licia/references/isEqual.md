## isEqual

Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

<details>
<summary>Type Definition</summary>

```typescript
function isEqual(val: any, other: any): boolean;
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|val   |Value to compare             |
|other |Other value to compare       |
|return|True if values are equivalent|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```
