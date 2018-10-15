## CN

Simple state machine.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|initial|string|Initial state         |
|events |string|Events to change state|

### is

Check current state.

|参数名|类型|说明|
|-----|----|---|
|value |string |State to check                          |
|返回值|boolean|True if current state equals given value|

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