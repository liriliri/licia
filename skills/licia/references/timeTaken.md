## timeTaken

Get execution time of a function.

<details>
<summary>Type Definition</summary>

```typescript
function timeTaken(fn: types.AnyFn): number;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|fn    |Function to measure time|
|return|Execution time, ms      |

```javascript
timeTaken(function() {
    // Do something.
}); // -> Time taken to execute given function.
```
