## callbackify

Convert a function that returns a Promise to a function following the error-first callback style.

<details>
<summary>Type Definition</summary>

```typescript
function callbackify(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc                                            |
|------|------------------------------------------------|
|fn    |Function that returns a Promise                 |
|return|Function following the error-fist callback style|

```javascript
function fn() {
    return new Promise(function(resolve, reject) {
        // ...
    });
}

const cbFn = callbackify(fn);

cbFn(function(err, value) {
    // ...
});
```
