## isArgs

Check if value is classified as an arguments object.

<details>
<summary>Type Definition</summary>

```typescript
function isArgs(val: any): val is IArguments;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Value to check                      |
|return|True if value is an arguments object|

```javascript
isArgs(
    (function() {
        return arguments;
    })()
); // -> true
```
