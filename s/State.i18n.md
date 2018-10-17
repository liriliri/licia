## CN

简单状态机。

继承自 Emitter 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|initial|string|初始状态|
|events|string|改变状态的事件|

### is

检查当前状态是否是指定状态。

|参数名|类型|说明|
|-----|----|---|
|value|string|要检查的状态|
|返回值|boolean|如果是，返回真|

```javascript
var state = new State('empty', {
    load: {from: 'empty', to: 'pause'},
    play: {from: 'pause', to: 'play'},
    pause: {from: ['play', 'empty'], to: 'pause'},
    unload: {from: ['play', 'pause'], to: 'empty'}
});

state.is('empty'); // -> true
state.load();
state.is('pause'); // -> true
state.on('play', function (src) {
    console.log(src); // -> 'eustia'
});
state.on('error', function (err, event) {
    // Error handler
});
state.play('eustia');
```