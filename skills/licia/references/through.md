## through

Tiny wrapper of stream Transform.

<details>
<summary>Type Definition</summary>

```typescript
import stream = require('stream');
namespace through {
    interface ThroughConstructor extends stream.Transform {
        new (opts?: stream.DuplexOptions): stream.Transform;
        (opts?: stream.DuplexOptions): stream.Transform;
    }
    type TransformCallback = (err?: any, data?: any) => void;
    type TransformFunction = (
        this: stream.Transform,
        chunk: any,
        enc: string,
        callback: TransformCallback
    ) => void;
    type FlushCallback = (
        this: stream.Transform,
        flushCallback: () => void
    ) => void;
    function obj(
        transform?: TransformFunction,
        flush?: FlushCallback
    ): stream.Transform;
    function ctor(
        transform?: TransformFunction,
        flush?: FlushCallback
    ): ThroughConstructor;
    function ctor(
        opts?: stream.DuplexOptions,
        transform?: TransformFunction,
        flush?: FlushCallback
    ): ThroughConstructor;
}
function through(
    transform?: through.TransformFunction,
    flush?: through.FlushCallback
): stream.Transform;
function through(
    opts?: stream.DuplexOptions,
    transform?: through.TransformFunction,
    flush?: through.FlushCallback
): stream.Transform;
```

</details>

|Name     |Desc                        |
|---------|----------------------------|
|opts={}  |Options to initialize stream|
|transform|Transform implementation    |
|flush    |Flush implementation        |

### obj

Shortcut for setting objectMode to true.

### ctor

Return a class that extends stream Transform.

```javascript
const fs = require('fs');
fs.createReadStream('in.txt')
    .pipe(
        through(function(chunk, enc, cb) {
            // Do something to chunk
            this.push(chunk);
            cb();
        })
    )
    .pipe(fs.createWriteStream('out.txt'));
```
