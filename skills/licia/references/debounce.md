## debounce

Return a new debounced version of the passed function.

<details>
<summary>Type Definition</summary>

```typescript
function debounce<T extends types.AnyFn>(fn: T, wait: number): T;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|fn    |Function to debounce           |
|wait  |Number of milliseconds to delay|
|return|New debounced function         |

```javascript
const calLayout = debounce(function() {}, 300);
// $(window).resize(calLayout);
```
