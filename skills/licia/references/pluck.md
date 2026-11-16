## pluck

Extract a list of property values.

<details>
<summary>Type Definition</summary>

```typescript
function pluck<T, K extends keyof T>(
    list: types.List<T>,
    key: K
): T[K][];
function pluck(object: any, key: string | string[]): any[];
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|obj   |Collection to iterate over     |
|key   |Property path                  |
|return|New array of specified property|

```javascript
const stooges = [
    { name: 'moe', age: 40 },
    { name: 'larry', age: 50 },
    { name: 'curly', age: 60 }
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```
