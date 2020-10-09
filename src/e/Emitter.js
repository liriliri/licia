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
 * |Name    |Desc          |
 * |--------|--------------|
 * |event   |Event name    |
 * |listener|Event listener|
 *
 * ### emit
 *
 * Emit event.
 *
 * |Name   |Desc                        |
 * |-------|----------------------------|
 * |event  |Event name                  |
 * |...args|Arguments passed to listener|
 *
 * ### removeAllListeners
 *
 * Remove all listeners.
 *
 * |Name |Desc      |
 * |-----|----------|
 * |event|Event name|
 *
 * ### mixin
 *
 * [static] Mixin object class methods.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |obj |Object to mixin|
 */

/* example
 * const event = new Emitter();
 * event.on('test', function(name) {
 *     console.log(name);
 * });
 * event.emit('test', 'licia'); // Logs out 'licia'.
 * Emitter.mixin({});
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Emitter {
 *     on(event: string, listener: types.AnyFn): Emitter;
 *     off(event: string, listener: types.AnyFn): Emitter;
 *     once(event: string, listener: types.AnyFn): Emitter;
 *     emit(event: string, ...args: any[]): Emitter;
 *     removeAllListeners(event?: string): Emitter;
 *     static mixin(obj: any): any;
 * }
 */

_('Class has each slice once types clone');

exports = Class(
    {
        initialize: function Emitter() {
            this._events = this._events || {};
        },
        on(event, listener) {
            this._events[event] = this._events[event] || [];
            this._events[event].push(listener);

            return this;
        },
        off(event, listener) {
            const events = this._events;
            if (!has(events, event)) return;

            const idx = events[event].indexOf(listener);
            if (idx > -1) {
                events[event].splice(idx, 1);
            }

            return this;
        },
        once(event, listener) {
            this.on(event, once(listener));

            return this;
        },
        emit(event) {
            if (!has(this._events, event)) return;

            const args = slice(arguments, 1);

            const events = clone(this._events[event]);
            each(events, val => val.apply(this, args), this);

            return this;
        },
        removeAllListeners(event) {
            if (!event) {
                this._events = {};
            } else {
                delete this._events[event];
            }

            return this;
        }
    },
    {
        mixin(obj) {
            each(['on', 'off', 'once', 'emit'], function(val) {
                obj[val] = exports.prototype[val];
            });

            obj._events = obj._events || {};
        }
    }
);
