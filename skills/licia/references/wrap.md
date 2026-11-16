## wrap

Wrap the function inside a wrapper function, passing it as the first argument.

<details>
<summary>Type Definition</summary>

```typescript
function wrap(
    fn: types.AnyFn,
    wrapper: types.AnyFn
): types.AnyFn;
```

</details>

|Name   |Desc            |
|-------|----------------|
|fn     |Function to wrap|
|wrapper|Wrapper function|
|return |New function    |

```javascript
const p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```
