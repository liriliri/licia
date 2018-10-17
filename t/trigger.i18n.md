## CN

触发浏览器事件。

|参数名|类型|说明|
|-----|----|---|
|[el=document]|element|目标元素|
|type|string|事件类型|
|opts|object|选项|

```javascript
trigger(el, 'mouseup');
trigger('keydown', {keyCode: 65});
```