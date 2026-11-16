## promisify

Convert callback based functions into Promises.

<details>
<summary>Type Definition</summary>

```typescript
function promisify<TArgs extends any[], TResult>(
    fn: (...args: [...TArgs, (err: any, result: TResult) => void]) => any,
    multiArgs?: false
): (...args: TArgs) => Promise<TResult>;
function promisify(
    fn: types.AnyFn,
    multiArgs?: boolean
): (...args: any[]) => Promise<any>;
```

</details>

|Name           |Desc                                  |
|---------------|--------------------------------------|
|fn             |Callback based function               |
|multiArgs=false|If callback has multiple success value|
|return         |Result function                       |

If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.

```javascript
const fs = require('fs');

const readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function(data) {
    // Do something with file content.
});
```
