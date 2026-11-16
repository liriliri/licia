## tryIt

Run function in a try catch.

<details>
<summary>Type Definition</summary>

```typescript
function tryIt(fn: types.AnyFn, cb?: types.AnyFn): void;
```

</details>

|Name|Desc                 |
|----|---------------------|
|fn  |Function to try catch|
|cb  |Callback             |

```javascript
tryIt(
    function() {
        // Do something that might cause an error.
    },
    function(err, result) {
        if (err) console.log(err);
    }
);
```
