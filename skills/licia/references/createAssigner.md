## createAssigner

Used to create extend, extendOwn and defaults.

<details>
<summary>Type Definition</summary>

```typescript
function createAssigner(
    keysFn: types.AnyFn,
    defaults: boolean
): types.AnyFn;
```

</details>

|Name    |Desc                          |
|--------|------------------------------|
|keysFn  |Function to get object keys   |
|defaults|No override when set to true  |
|return  |Result function, extend...    |
