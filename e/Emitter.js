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

/* module
 * env: all
 * test: all
 */

_('Class has each slice once');

exports = Class(
    {
        initialize: function Emitter() {
            this._events = this._events || {};
        },
        on: function(event, listener) {
            this._events[event] = this._events[event] || [];
            this._events[event].push(listener);

            return this;
        },
        off: function(event, listener) {
            if (!has(this._events, event)) return
            var reg = /\{\s*\[native code\]\s*\}/
            var listenerStr = listener.toString()
            var isNativeOff = reg.test(listenerStr)
            if (isNativeOff) return
            if (listener && typeof listener === 'function') {
                var listeners = this._events[event]
                for (var i = 0; i < listeners.length; i++) {
                    let listenersItemStr = listeners[i].toString()
                    if (
                        !reg.test(listenersItemStr) &&
                        listenersItemStr === listenerStr
                    ) {
                        listeners.splice(i, 1)
                    }
                }
            } else {
                delete this._events[event]
            }

            return this
        },
        once: function(event, listener) {
            this.on(event, once(listener));

            return this;
        },
        emit: function(event) {
            if (!has(this._events, event)) return;

            var args = slice(arguments, 1);

            each(
                this._events[event],
                function(val) {
                    val.apply(this, args);
                },
                this
            );

            return this;
        }
    },
    {
        mixin: function(obj) {
            each(['on', 'off', 'once', 'emit'], function(val) {
                obj[val] = exports.prototype[val];
            });

            obj._events = obj._events || {};
        }
    }
);
