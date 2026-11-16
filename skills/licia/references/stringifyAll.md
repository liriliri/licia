## stringifyAll

Stringify object into json with types.

<details>
<summary>Type Definition</summary>

```typescript
namespace stringifyAll {
    function parse(str: string): any;
}
function stringifyAll(
    obj: any,
    options?: {
        unenumerable?: boolean;
        symbol?: boolean;
        accessGetter?: boolean;
        timeout?: number;
        depth?: number;
        ignore?: any[];
    }
): string;
```

</details>

|Name   |Desc               |
|-------|-------------------|
|obj    |Object to stringify|
|options|Stringify options  |
|return |Stringified object |

Available options:

|Name              |Desc                     |
|------------------|-------------------------|
|unenumerable=false|Include unenumerable keys|
|symbol=false      |Include symbol keys      |
|accessGetter=false|Access getter value      |
|timeout=0         |Timeout of stringify     |
|depth=0           |Max depth of recursion   |
|ignore            |Values to ignore         |

When time is out, all remaining values will all be "Timeout".

### parse

Parse result string back to object.

|Name  |Type           |
|------|---------------|
|obj   |String to parse|
|return|Result object  |

```javascript
stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
```
