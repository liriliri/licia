## State

Simple state machine.

<details>
<summary>Type Definition</summary>

```typescript
class State extends Emitter {
    constructor(initial: string, events: any);
    is(state: string): boolean;
    [event: string]: any;
}
```

</details>

Extend from Emitter.

### constructor

|Name   |Desc                  |
|-------|----------------------|
|initial|Initial state         |
|events |Events to change state|

### is

Check current state.

|Name  |Desc                                    |
|------|----------------------------------------|
|state |State to check                          |
|return|True if current state equals given value|

```javascript
const state = new State('empty', {
    load: { from: 'empty', to: 'pause' },
    play: { from: 'pause', to: 'play' },
    pause: { from: ['play', 'empty'], to: 'pause' },
    unload: { from: ['play', 'pause'], to: 'empty' }
});

state.is('empty'); // -> true
state.load();
state.is('pause'); // -> true
state.on('play', function(src) {
    console.log(src); // -> 'eustia'
});
state.on('error', function(err, event) {
    // Error handler
});
state.play('eustia');
```
