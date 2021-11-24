/* Event emitter with single event type.
 *
 * ### addListener
 *
 * Add listener.
 *
 * ### rmListener
 *
 * Remove listener.
 *
 * |Name    |Desc          |
 * |--------|--------------|
 * |listener|Event listener|
 *
 * ### rmAllListeners
 *
 * Remove all listeners.
 *
 * ### emit
 *
 * Call listeners.
 *
 * |Name   |Desc                        |
 * |-------|----------------------------|
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
 * const event = new SingleEmitter();
 * event.addListener(function(name) {
 *     console.log(name);
 * });
 * event.emit('licia'); // Logs out 'licia'.
 */

/* module
 * env: all
 * since: 1.29.0
 */

/* typescript
 * export declare class SingleEmitter {
 *     addListener(listener: types.AnyFn): void;
 *     rmListener(listener: types.AnyFn): void;
 *     emit(...args: any[]): void;
 *     rmAllListeners(): void;
 *     static mixin(obj: any): void;
 * }
 */

_('Class clone each toArr types');

exports = Class(
    {
        initialize: function SingleEmitter() {
            this._listeners = [];
        },
        addListener(listener) {
            this._listeners.push(listener);
        },
        rmListener(listener) {
            const idx = this._listeners.indexOf(listener);

            if (idx > -1) {
                this._listeners.splice(idx, 1);
            }
        },
        rmAllListeners() {
            this._listeners = [];
        },
        emit() {
            const args = toArr(arguments);
            const listeners = clone(this._listeners);
            each(listeners, listener => listener.apply(this, args), this);
        }
    },
    {
        mixin(obj) {
            each(
                ['addListener', 'rmListener', 'emit', 'rmAllListeners'],
                function(val) {
                    obj[val] = exports.prototype[val];
                }
            );

            obj._listeners = obj._listeners || [];
        }
    }
);
