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
 * |Name  |Desc                                    |
 * |------|----------------------------------------|
 * |tasks |Tasks to listen                         |
 * |fn    |Callback to trigger if tasks are ready  |
 * |return|Promise that will be resolved when ready|
 *
 * ### isReady
 *
 * Check if tasks are ready.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |tasks |Tasks to check             |
 * |return|True if all tasks are ready|
 */

/* example
 * const readiness = new Readiness();
 * readiness.ready('serverCreated', function() {
 *     // Do something.
 * });
 * readiness.signal('serverCreated');
 * readiness.isReady('serverCreated'); // -> true
 */

/* module
 * env: all
 * since: 1.32.0
 */

/* typescript
 * export declare class Readiness {
 *     signal(tasks: string | string[]): void;
 *     isReady(tasks: string | string[]): boolean;
 *     ready(tasks: string | string[], fn?: types.AnyFn): Promise<void>;
 * }
 */

_('Class types toArr each map noop some');

exports = Class({
    initialize: function Readiness() {
        this._promises = {};
        this._resolves = {};
        this._states = {};
    },
    signal(tasks) {
        const states = this._states;

        each(this._getPromises(toArr(tasks)), val => {
            if (!val.state) {
                states[val.task] = true;
                val.resolve();
            }
        });
    },
    isReady(tasks) {
        return !some(this._getPromises(toArr(tasks)), val => !val.state);
    },
    ready(tasks, fn = noop) {
        return Promise.all(
            map(this._getPromises(toArr(tasks)), val => val.promise)
        ).then(fn);
    },
    _getPromises(tasks) {
        const promises = this._promises;
        const resolves = this._resolves;
        const states = this._states;

        return map(tasks, task => {
            if (!promises[task]) {
                promises[task] = new Promise(resolve => {
                    resolves[task] = resolve;
                    states[task] = false;
                });
            }
            return {
                task,
                promise: promises[task],
                resolve: resolves[task],
                state: states[task]
            };
        });
    }
});
