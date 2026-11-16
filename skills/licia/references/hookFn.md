## hookFn

Monitor, change function arguments and result.

<details>
<summary>Type Definition</summary>

```typescript
function hookFn<T>(
    fn: T,
    options: {
        before?: types.AnyFn;
        after?: types.AnyFn;
        error?: types.AnyFn;
    }
): T;
```

</details>

|Name   |Desc            |
|-------|----------------|
|fn     |Function to hook|
|options|Hook options    |
|return |Hooked function |

Available options:

|Name  |Desc             |
|------|-----------------|
|before|Arguments handler|
|after |Result handler   |
|error |Error handler    |

```javascript
let sum = function(a, b) {
    if (a > 100) {
        throw Error('a is bigger than 100');
    }
    return a + b;
};
let totalSum = 0;
sum = hookFn(sum, {
    before(a, b) {
        return [+a, +b];
    },
    after(result) {
        totalSum += result;
        return totalSum;
    },
    error() {
        return totalSum;
    }
});
sum('2', '5'); // -> 7
```
