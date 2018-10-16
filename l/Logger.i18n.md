## CN

带日志级别的简单日志库。

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|日志名称|
|level=DEBUG|number|日志级别|

### setLevel

设置日志级别。

|参数名|类型|说明|
|-----|----|---|
|level|number string|日志级别|

### getLevel

获取当前日志级别。

### trace, debug, info, warn, error

打日志方法。

### 日志级别 

TRACE，DEBUG，INFO，WARN，ERROR 和 SILENT。

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