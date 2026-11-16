## pipe

Pipe all streams together.

<details>
<summary>Type Definition</summary>

```typescript
import stream = require('stream');
function pipe(...streams: stream.Stream[]): void;
```

</details>

|Name      |Desc           |
|----------|---------------|
|...streams|Streams to pipe|

```javascript
const fs = require('fs');
const through = require('licia/through');
pipe(
    fs.createReadStream('in.txt'),
    through(function(chunk, enc, cb) {
        this.push(chunk);
        cb();
    }),
    fs.createWriteStream('out.txt')
);
```
