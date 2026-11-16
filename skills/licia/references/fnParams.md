## fnParams

Get a function parameter's names.

<details>
<summary>Type Definition</summary>

```typescript
function fnParams(fn: types.AnyFn | string): string[];
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|fn    |Function to get parameters|
|return|Names                     |

```javascript
fnParams(function(a, b) {}); // -> ['a', 'b']
```
