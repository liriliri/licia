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
 * event.on('test', function () { console.log('test') });
 * event.emit('test'); // Logs out 'test'.
 * Emitter.mixin({});
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Emitter {
 *     on(event: string, listener: Function): Emitter;
 *     off(event: string, listener: Function): Emitter;
 *     once(event: string, listener: Function): Emitter;
 *     emit(event: string): Emitter;
 *     static mixin(obj: any): any;
 * }
 */

_('Class has each slice once');

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
            if (!has(this._events, event)) return;

            this._events[event].splice(
                this._events[event].indexOf(listener),
                1
            );

            return this;
        },
        once(event, listener) {
            this.on(event, once(listener));

            return this;
        },
        emit(event) {
            if (!has(this._events, event)) return;

            const args = slice(arguments, 1);

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
        mixin(obj) {
            each(['on', 'off', 'once', 'emit'], function(val) {
                obj[val] = exports.prototype[val];
            });

            obj._events = obj._events || {};
        }
    }
);
