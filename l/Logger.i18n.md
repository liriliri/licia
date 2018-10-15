## CN

Simple logger with level filter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|name         |string|Logger name |
|[level=DEBUG]|number|Logger level|

### setLevel

|参数名|类型|说明|
|-----|----|---|
|level|number string|Logger level|

### getLevel

Get current level.

### trace, debug, info, warn, error

Logging methods.

### Log Levels

TRACE, DEBUG, INFO, WARN, ERROR and SILENT.

```javascript
var logger = new Logger('licia', Logger.level.ERROR);
logger.trace('test');

// Format output.
logger.formatter = function (type, argList) {
    argList.push(new Date().getTime());

    return argList;
};

logger.on('all', function (type, argList) {
    // It's not affected by log level.
});

logger.on('debug', function (argList) {
    // Affected by log level.
});
```