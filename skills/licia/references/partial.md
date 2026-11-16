## partial

Partially apply a function by filling in given arguments.

<details>
<summary>Type Definition</summary>

```typescript
function partial(
    fn: types.AnyFn,
    ...partials: any[]
): types.AnyFn;
```

</details>

|Name       |Desc                                    |
|-----------|----------------------------------------|
|fn         |Function to partially apply arguments to|
|...partials|Arguments to be partially applied       |
|return     |New partially applied function          |

```javascript
const sub5 = partial(function(a, b) {
    return b - a;
}, 5);
sub5(20); // -> 15
```
