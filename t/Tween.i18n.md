## CN

Tween engine for JavaScript animations.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|obj |object|Values to tween|

### to

|参数名|类型|说明|
|-----|----|---|
|destination|obj            |Final properties|
|duration   |number         |Tween duration  |
|ease       |string function|Easing function |

### play

Begin playing forward.

### pause

Pause the animation.

### paused

Get animation paused state.

### progress

Update or get animation progress.

|参数名|类型|说明|
|-----|----|---|
|[progress]|number|Number between 0 and 1|

```javascript
var pos = {x: 0, y: 0};

var tween = new Tween(pos);
tween.on('update', function (target)
{
    console.log(target.x, target.y);
}).on('end', function (target)
{
    console.log(target.x, target.y); // -> 100, 100
});
tween.to({x: 100, y: 100}, 1000, 'inElastic').play();
```