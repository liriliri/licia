## waitUntil

Wait until function returns a truthy value.

<details>
<summary>Type Definition</summary>

```typescript
function waitUntil<T>(
    condition: () => T | PromiseLike<T>,
    timeout?: number,
    interval?: number
): Promise<T>;
```

</details>

|Name        |Desc              |
|------------|------------------|
|condition   |Condition function|
|timeout=0   |Timeout           |
|interval=250|Wait interval     |

```javascript
let a = 5;
setTimeout(() => (a = 10), 500);
waitUntil(() => a === 10).then(() => {
    console.log(a); // -> 10
});
```
