## universalify

Make an async function support both promises and callbacks.

<details>
<summary>Type Definition</summary>

```typescript
function universalify(
    fn: types.AnyFn,
    type: string
): types.AnyFn;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|fn    |Async function                  |
|type  |Source type, promise or callback|
|return|Result function                 |

```javascript
function callbackFn(str, cb) {
    setTimeout(() => {
        cb(null, str);
    }, 10);
}

const fn = universalify(callbackFn, 'callback');
fn('licia', (err, result) => {
    console.log(result); // -> 'licia'
});
fn('licia').then(result => {
    console.log(result); // -> 'licia'
});
```
