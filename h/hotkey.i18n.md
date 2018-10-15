## CN

Capture keyboard input to trigger given events.

### on

Register keyboard listener.

|参数名|类型|说明|
|-----|----|---|
|key     |string  |Key string  |
|listener|function|Key listener|

### off

Unregister keyboard listener.

```javascript
hotkey.on('k', function () {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```