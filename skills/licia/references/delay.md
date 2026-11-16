## delay

Invoke function after certain milliseconds.

<details>
<summary>Type Definition</summary>

```typescript
function delay(
    fn: types.AnyFn,
    wait: number,
    ...args: any[]
): void;
```

</details>

|Name   |Desc                                      |
|-------|------------------------------------------|
|fn     |Function to delay                         |
|wait   |Number of milliseconds to delay invocation|
|...args|Arguments to invoke fn with               |

```javascript
delay(
    function(text) {
        console.log(text);
    },
    1000,
    'later'
);
// -> Logs 'later' after one second
```
