## allKeys

Retrieve all the names of object's own and inherited properties.

<details>
<summary>Type Definition</summary>

```typescript
namespace allKeys {
    interface IOptions {
        prototype?: boolean;
        unenumerable?: boolean;
    }
}
function allKeys(
    obj: any,
    options: { symbol: true } & allKeys.IOptions
): Array<string | Symbol>;
function allKeys(
    obj: any,
    options?: ({ symbol: false } & allKeys.IOptions) | allKeys.IOptions
): string[];
```

</details>

|Name   |Desc                       |
|-------|---------------------------|
|obj    |Object to query            |
|options|Options                    |
|return |Array of all property names|

Available options:

|Name              |Desc                     |
|------------------|-------------------------|
|prototype=true    |Include prototype keys   |
|unenumerable=false|Include unenumerable keys|
|symbol=false      |Include symbol keys      |

Members of Object's prototype won't be retrieved.

```javascript
const obj = Object.create({ zero: 0 });
obj.one = 1;
allKeys(obj); // -> ['zero', 'one']
```
