## waterfall

Run an array of functions in series.

<details>
<summary>Type Definition</summary>

```typescript
function waterfall(tasks: types.AnyFn[], cb?: types.AnyFn): void;
```

</details>

|Name |Desc                   |
|-----|-----------------------|
|tasks|Array of functions     |
|cb   |Callback once completed|

```javascript
waterfall(
    [
        function(cb) {
            cb(null, 'one');
        },
        function(arg1, cb) {
            // arg1 -> 'one'
            cb(null, 'done');
        }
    ],
    function(err, result) {
        // result -> 'done'
    }
);
```
