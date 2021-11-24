/* Readiness manager.
 *
 * ### signal
 *
 * Signal task is ready.
 *
 * |Name |Desc       |
 * |-----|-----------|
 * |tasks|Ready tasks|
 *
 * ### ready
 *
 * Register ready callback.
 *
 * |Name |Desc                                  |
 * |-----|--------------------------------------|
 * |tasks|Tasks to listen                       |
 * |fn   |Callback to trigger if tasks are ready|
 */

/* example
 * const readiness = new Readiness();
 * readiness.ready('serverCreated', function() {
 *     // Do something.
 * });
 * readiness.signal('serverCreated');
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Readiness {
 *     signal(tasks: string | string[]): void;
 *     ready(tasks: string | string[], fn: types.AnyFn): void;
 * }
 */

_('Class types toArr each map');

exports = Class({
    initialize: function Readiness() {
        this._promises = {};
        this._resolves = {};
    },
    signal(tasks) {
        each(this._getPromises(toArr(tasks)), val => val.resolve());
    },
    ready(tasks, fn) {
        Promise.all(
            map(this._getPromises(toArr(tasks)), val => val.promise)
        ).then(fn);
    },
    _getPromises(events) {
        const promises = this._promises;
        const resolves = this._resolves;
        return map(events, event => {
            if (!promises[event]) {
                promises[event] = new Promise(resolve => {
                    resolves[event] = resolve;
                });
            }
            return {
                promise: promises[event],
                resolve: resolves[event]
            };
        });
    }
});
