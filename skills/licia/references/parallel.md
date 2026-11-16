## parallel

Run an array of functions in parallel.

<details>
<summary>Type Definition</summary>

```typescript
function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;
```

</details>

|Name |Desc                   |
|-----|-----------------------|
|tasks|Array of functions     |
|cb   |Callback once completed|

```javascript
parallel(
    [
        function(cb) {
            setTimeout(function() {
                cb(null, 'one');
            }, 200);
        },
        function(cb) {
            setTimeout(function() {
                cb(null, 'two');
            }, 100);
        }
    ],
    function(err, results) {
        // results -> ['one', 'two']
    }
);
```
