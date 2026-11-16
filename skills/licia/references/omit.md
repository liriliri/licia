## omit

Opposite of pick.

<details>
<summary>Type Definition</summary>

```typescript
function omit(
    obj: any,
    filter: string | string[] | Function
): any;
```

</details>

|Name  |Desc           |
|------|---------------|
|obj   |Source object  |
|filter|Object filter  |
|return|Filtered object|

```javascript
omit({ a: 1, b: 2 }, 'a'); // -> {b: 2}
omit({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {a: 1}
omit({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```
