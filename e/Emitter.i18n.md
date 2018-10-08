## CN

Event emitter class which provides observer pattern.

### on

Bind event.

### off

Unbind event.

### once

Bind event that trigger once.

|参数名|类型|说明|
|-----|----|---|
|event   |string  |Event name    |
|listener|function|Event listener|

### emit

Emit event.

|参数名|类型|说明|
|-----|----|---|
|event  |string|Event name                  |
|...args|*     |Arguments passed to listener|

### mixin

[static] Mixin object class methods.

|参数名|类型|说明|
|-----|----|---|
|obj |object|Object to mixin|

```javascript
var event = new Emitter();
event.on('test', function () { console.log('test') });
event.emit('test'); // Logs out 'test'.
Emitter.mixin({});
```