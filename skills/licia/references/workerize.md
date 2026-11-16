## workerize

Move a stand-alone function to a worker thread.

<details>
<summary>Type Definition</summary>

```typescript
function workerize(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc               |
|------|-------------------|
|fn    |Function to turn   |
|return|Workerized Function|

```javascript
const worker = workerize(function(a, b) {
    return a + b;
});
worker(1, 2).then(function(value) {
    console.log(value); // -> 3
});
```
