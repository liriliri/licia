## Logger

Simple logger with level filter.

<details>
<summary>Type Definition</summary>

```typescript
class Logger extends Emitter {
    name: string;
    formatter(type: string, argList: any[]): any[];
    constructor(name: string, level?: string | number);
    setLevel(level: string | number): Logger;
    getLevel(): number;
    trace(...args: any[]): Logger;
    debug(...args: any[]): Logger;
    info(...args: any[]): Logger;
    warn(...args: any[]): Logger;
    error(...args: any[]): Logger;
    static level: Enum;
}
```

</details>

### constructor

|Name       |Desc        |
|-----------|------------|
|name       |Logger name |
|level=DEBUG|Logger level|

### setLevel

Set level.

|Name |Desc        |
|-----|------------|
|level|Logger level|

### getLevel

Get current level.

### trace, debug, info, warn, error

Logging methods.

### Log Levels

TRACE, DEBUG, INFO, WARN, ERROR and SILENT.

```javascript
const logger = new Logger('licia', Logger.level.ERROR);
logger.trace('test');

// Format output.
logger.formatter = function(type, argList) {
    argList.push(new Date().getTime());

    return argList;
};

logger.on('all', function(type, argList) {
    // It's not affected by log level.
});

logger.on('debug', function(argList) {
    // Affected by log level.
});
```
