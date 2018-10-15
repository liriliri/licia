## CN

给指定 dom 元素绑定事件。

```javascript
function clickHandler() {
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```