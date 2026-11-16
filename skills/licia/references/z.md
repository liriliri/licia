# Licia Reference: z

## zip

Merge together the values of each of the arrays with the values at the corresponding position.

<details>
<summary>Type Definition</summary>

```typescript
function zip(...arr: Array<any[]>): Array<any[]>;
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|arr   |Arrays to process            |
|return|New array of grouped elements|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```
