## pick

Return a filtered copy of an object.

<details>
<summary>Type Definition</summary>

```typescript
function pick(
    object: any,
    filter: string | string[] | Function
): any;
```

</details>

|Name  |Desc           |
|------|---------------|
|object|Source object  |
|filter|Object filter  |
|return|Filtered object|

```javascript
pick({ a: 1, b: 2 }, 'a'); // -> {a: 1}
pick({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {b: 2, c: 3}
pick({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```
