/* Event emitter class which provides observer pattern.
 *
 * ### on
 *
 * Bind event.
 *
 * ### off
 *
 * Unbind event.
 *
 * ### once
 *
 * Bind event that trigger once.
 *
 * |Name    |Type    |Desc          |
 * |--------|--------|--------------|
 * |event   |string  |Event name    |
 * |listener|function|Event listener|
 *
 * ### emit
 *
 * Emit event.
 *
 * |Name   |Type  |Desc                        |
 * |-------|------|----------------------------|
 * |event  |string|Event name                  |
 * |...args|*     |Arguments passed to listener|
 *
 * ### mixin
 *
 * [static] Mixin object class methods.
 *
 * |Name|Type  |Desc           |
 * |----|------|---------------|
 * |obj |object|Object to mixin|
 *
 * ```javascript
 * var event = new Emitter();
 * event.on('test', function () { console.log('test') });
 * event.emit('test'); // Logs out 'test'.
 * Emitter.mixin({});
 * ```
 */

_('Class has each slice once');

exports = Class({
    className: 'Emitter',
    initialize: function ()
    {
        this._events = this._events || {};
    },
    on: function (event, listener)
    {
        this._events[event] = this._events[event] || [];
        this._events[event].push(listener);

        return this;
    },
    off: function (event, listener)
    {
        if (!has(this._events, event)) return;

        this._events[event].splice(this._events[event].indexOf(listener), 1);

        return this;
    },
    once: function (event, listener)
    {
        this.on(event, once(listener));

        return this;
    },
    emit: function (event)
    {
        if (!has(this._events, event)) return;

        var args = slice(arguments, 1);

        each(this._events[event], function (val)
        {
            val.apply(this, args);
        }, this);

        return this;
    }
}, {
    mixin: function (obj)
    {
        each(['on', 'off', 'once', 'emit'], function (val)
        {
            obj[val] = Emitter.prototype[val];
        });

        obj._events = obj._events || {};
    }
});
