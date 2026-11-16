## toSrc

Convert function to its source code.

<details>
<summary>Type Definition</summary>

```typescript
function toSrc(fn: types.AnyFn): string;
```

</details>

|Name  |Desc               |
|------|-------------------|
|fn    |Function to convert|
|return|Source code        |

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function() {}); // -> 'function () { }'
```
