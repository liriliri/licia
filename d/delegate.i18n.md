## CN

事件委托。

### add

添加事件委托。

|参数名|类型|说明|
|-----|----|---|
|el|element|父元素|
|type|string|事件类型|
|selector|string|匹配选择器|
|cb|function|事件回调|

### remove

移除事件委托。

```javascript
var container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```