## throttle

Return a new throttled version of the passed function.

<details>
<summary>Type Definition</summary>

```typescript
function throttle<T extends types.AnyFn>(fn: T, wait: number): T;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|fn    |Function to throttle           |
|wait  |Number of milliseconds to delay|
|return|New throttled function         |

```javascript
const updatePos = throttle(function() {}, 100);
// $(window).scroll(updatePos);
```
