## Tween

Tween engine for JavaScript animations.

<details>
<summary>Type Definition</summary>

```typescript
class Tween extends Emitter {
    constructor(target: any);
    to(props: any, duration?: number, ease?: string | Function): Tween;
    progress(): number;
    progress(progress: number): Tween;
    play(): Tween;
    pause(): Tween;
    paused(): boolean;
}
```

</details>

Extend from Emitter.

### constructor

|Name|Desc           |
|----|---------------|
|obj |Values to tween|

### to

|Name       |Desc            |
|-----------|----------------|
|destination|Final properties|
|duration   |Tween duration  |
|ease       |Easing function |

### play

Begin playing forward.

### pause

Pause the animation.

### paused

Get animation paused state.

### progress

Update or get animation progress.

|Name    |Desc                  |
|--------|----------------------|
|progress|Number between 0 and 1|

```javascript
const pos = { x: 0, y: 0 };

const tween = new Tween(pos);
tween
    .on('update', function(target) {
        console.log(target.x, target.y);
    })
    .on('end', function(target) {
        console.log(target.x, target.y); // -> 100, 100
    });
tween.to({ x: 100, y: 100 }, 1000, 'inElastic').play();
```
