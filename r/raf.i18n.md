## CN

requestAnimationFrame 快捷方式。

如果原生 requestAnimationFrame 不支持，使用 setTimeout 进行兼容。

```javascript
var id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```