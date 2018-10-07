## CN

插入 html 到不同位置。

### before

插入 html 到元素前。

### after

插入 html 到元素后。

### prepend

插入 html 到元素内部前。

### append

插入 html 到元素内部后。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|content|string|html 字符串|

```javascript
// <div id="test"><div class="mark"></div></div>
$insert.before('#test', '<div>licia</div>');
// -> <div>licia</div><div id="test"><div class="mark"></div></div>
$insert.after('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div></div><div>licia</div>
$insert.prepend('#test', '<div>licia</div>');
// -> <div id="test"><div>licia</div><div class="mark"></div></div>
$insert.append('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div><div>licia</div></div>
```
