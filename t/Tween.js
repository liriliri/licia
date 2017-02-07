/* Tween engine for JavaScript animations. // TODO
 *
 * ```javascript
 * var pos = {x: 0, y: 0};
 *
 * var tween = new Tween(pos);
 * tween.to({x: 100, y: 100}, 1000)
 *      .onUpdate(function ()
 *      {
 *          console.log(this.x, this.y);
 *      })
 *      .start();
 * ```
 */

_('Emitter State isEl easing');

exports = Emitter.extend({
    className: 'Tween',
    initialize: function (target)
    {
        this.callSuper(Emitter, 'initialize', arguments);

        this._isEl = isEl(target);
        this._target = target;
        this._loop = false;
        this._steps = [];
        this._current = 0;
        this._state = new State('pause', {
            play: {from: 'pause', to: 'play'},
            pause: {from: 'play', to: 'pause'}
        });
    },
    to: function (props, duration, ease)
    {
        ease = ease || 'linear';

        this._steps.push({
            type: 'to',
            props: props,
            duration: duration || 0,
            ease: easing[ease]
        });

        return this;
    },
    loop: function (flag)
    {
        this._loop = flag;

        return this;
    },
    call: function (fn)
    {
        this._steps.push({
            type: 'call',
            fn: fn
        });

        return this;
    },
    set: function ()
    {
        return this;
    },
    clear: function ()
    {
        return this;
    },
    play: function ()
    {
        return this;
    },
    pause: function ()
    {
        return this;
    },
    wait: function ()
    {
        return this;
    }
});
