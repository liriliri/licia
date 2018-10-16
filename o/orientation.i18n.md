## CN

屏幕方向工具库。

### on

绑定 change 事件。

### off

解绑 change 事件。

### get

获取当前屏幕方向（横屏 landscape 或 竖屏 portrait）。

```javascript
orientation.on('change', function (direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```