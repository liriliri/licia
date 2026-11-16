## negate

Create a function that negates the result of the predicate function.

<details>
<summary>Type Definition</summary>

```typescript
function negate<T extends types.AnyFn>(predicate: T): T;
```

</details>

|Name     |Desc               |
|---------|-------------------|
|predicate|Predicate to negate|
|return   |New function       |

```javascript
function even(n) {
    return n % 2 === 0;
}
[1, 2, 3, 4, 5, 6].filter(negate(even)); // -> [1, 3, 5]
```
