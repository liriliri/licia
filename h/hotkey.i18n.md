## CN

监听键盘触发对应的事件。

### on

注册键盘按键监听器。

|参数名|类型|说明|
|-----|----|---|
|key|string|按键|
|listener|function|监听器|

### off

注销监听器。

```javascript
hotkey.on('k', function () {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```