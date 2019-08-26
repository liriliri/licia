/* Tween engine for JavaScript animations.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name|Type  |Desc           |
 * |----|------|---------------|
 * |obj |object|Values to tween|
 *
 * ### to
 *
 * |Name       |Type           |Desc            |
 * |-----------|---------------|----------------|
 * |destination|obj            |Final properties|
 * |duration   |number         |Tween duration  |
 * |ease       |string function|Easing function |
 *
 * ### play
 *
 * Begin playing forward.
 *
 * ### pause
 *
 * Pause the animation.
 *
 * ### paused
 *
 * Get animation paused state.
 *
 * ### progress
 *
 * Update or get animation progress.
 *
 * |Name      |Type  |Desc                  |
 * |----------|------|----------------------|
 * |[progress]|number|Number between 0 and 1|
 */

/* example
 * const pos = {x: 0, y: 0};
 *
 * const tween = new Tween(pos);
 * tween.on('update', function (target) {
 *     console.log(target.x, target.y);
 * }).on('end', function (target) {
 *     console.log(target.x, target.y); // -> 100, 100
 * });
 * tween.to({x: 100, y: 100}, 1000, 'inElastic').play();
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Tween extends Emitter {
 *     constructor(target: any);
 *     to(props: any, duration?: number, ease?: string | Function): Tween;
 *     progress(): number;
 *     progress(progress: number): Tween;
 *     play(): Tween;
 *     pause(): Tween;
 *     paused(): boolean;
 * }
 */

_('Emitter State easing now each raf isFn');

exports = Emitter.extend({
    className: 'Tween',
    initialize: function(target) {
        this.callSuper(Emitter, 'initialize', arguments);

        this._target = target;
        this._dest = {};
        this._duration = 0;
        this._progress = 0;
        this._origin = {};
        this._diff = {};
        this._ease = easing['linear'];
        this._state = new State('pause', {
            play: { from: 'pause', to: 'play' },
            pause: { from: 'play', to: 'pause' }
        });
    },
    to: function(props, duration, ease) {
        const origin = {};
        const target = this._target;
        const diff = {};

        ease = ease || this._ease;

        this._dest = props;
        this._duration = duration || this._duration;
        this._ease = isFn(ease) ? ease : easing[ease];

        each(props, function(val, key) {
            origin[key] = target[key];
            diff[key] = val - origin[key];
        });

        this._origin = origin;
        this._diff = diff;

        return this;
    },
    progress: function(progress) {
        const ease = this._ease;
        const target = this._target;
        const origin = this._origin;
        const diff = this._diff;
        const dest = this._dest;
        const self = this;

        if (progress != null) {
            progress = progress < 1 ? progress : 1;
            this._progress = progress;

            each(dest, function(val, key) {
                target[key] = origin[key] + diff[key] * ease(progress);
            });

            self.emit('update', target);

            return this;
        }

        return this._progress;
    },
    play: function() {
        const state = this._state;

        if (state.is('play')) return;

        state.play();

        const startTime = now();
        const progress = this._progress;
        const duration = this._duration * (1 - progress);
        const target = this._target;
        const self = this;

        function render() {
            if (state.is('pause')) return;

            const time = now();

            self.progress(progress + (time - startTime) / duration);

            if (self._progress === 1) {
                state.pause();
                self.emit('end', target);
                return;
            }

            raf(render);
        }

        raf(render);

        return this;
    },
    pause: function() {
        const state = this._state;

        if (state.is('pause')) return;
        state.pause();

        return this;
    },
    paused: function() {
        return this._state.is('pause');
    }
});
