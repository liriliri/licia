## CN

Insert html on different position.

### before

Insert content before elements.

### after

Insert content after elements.

### prepend

Insert content to the beginning of elements.

### append

Insert content to the end of elements.

|参数名|类型|说明|
|-----|----|---|
|element|string array element|Elements to manipulate|
|content|string              |Html strings          |

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
