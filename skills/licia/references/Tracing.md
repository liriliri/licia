## Tracing

Easily create chrome tracing data.

<details>
<summary>Type Definition</summary>

```typescript
class Tracing {
    constructor(options?: {
        pid?: number;
        tid?: number;
        processName?: string;
        threadName?: string;
    });
    start(cat?: string): void;
    stop(): Trace.IEvent[];
    metadata(name: string, args: any): void;
    begin(cat: string, name: string, args?: any): void;
    end(args?: any): void;
    asyncBegin(cat: string, name: string, id?: string, args?: any): string;
    asyncEnd(id: string, args?: any): void;
    instant(
        cat: string,
        name: string,
        scope?: 'g' | 'p' | 't',
        args?: any
    ): void;
    id(): string;
}
```

</details>

### constructor

|Name   |Desc           |
|-------|---------------|
|options|Tracing options|

Available options:

|Name       |Desc        |
|-----------|------------|
|pid        |Process id  |
|tid        |Thread id   |
|processName|Process name|
|threadName |Thread name |

### start

Start recording.

|Name|Desc              |
|----|------------------|
|cat |Enabled categories|

### stop

Stop recording and get result events.

### begin

Record begin event.

|Name|Desc            |
|----|----------------|
|cat |Event categories|
|name|Event name      |
|args|Arguments       |

### end

Record end event.

### asyncBegin

Record async begin event.

### asyncEnd

Record async end event.

### instant

Record instant event.

### id

Get an unique id.

```javascript
const fs = require('fs');
const tracing = new Tracing();
tracing.start();
tracing.begin('cat', 'name');
// Do something...
tracing.end();
fs.writeFileSync(
    'path/to/trace',
    JSON.stringify(tracing.stop()),
    'utf8',
    function() {}
);
```
