## golangify

Handle errors like golang.

<details>
<summary>Type Definition</summary>

```typescript
function golangify<T, U = Error>(
    fn: (...args: any[]) => Promise<T>
): (...args: any[]) => Promise<[T | undefined, U | null]>;
function golangify<T, U = Error>(
    p: Promise<T>
): Promise<[T | undefined, U | null]>;
```

</details>

|Name  |Desc                                      |
|------|------------------------------------------|
|fn    |Function that returns a Promise           |
|return|Like fn, but resolves with [result, error]|

|Name  |Desc                                      |
|------|------------------------------------------|
|p     |Promise to transform                      |
|return|Promise that resolves with [result, error]|

```javascript
(async () => {
    let fnA = golangify(async () => {
        throw Error('err');
    });
    await fnA(); // -> [undefined, Error]
    let fnB = golangify(async num => num * 2);
    await fnB(2); // -> [4, null]

    await golangify(Promise.reject(Error('err'))); // -> [undefined, Error]
    await golangify(Promise.resolve(4)); // -> [4, null]
})();
```
