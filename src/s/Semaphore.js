/* Limit simultaneous access to a resource.
 *
 * ### constructor
 *
 * |Name     |Desc           |
 * |---------|---------------|
 * |counter=1|Initial counter|
 *
 * ### wait
 *
 * Wait to execute until counter is bigger than 0.
 *
 * |Name|Desc               |
 * |----|-------------------|
 * |fn  |Function to execute|
 *
 * ### signal
 *
 * Wake up one waiter if any.
 */

/* example
 * const sem = new Semaphore(10);
 * require('http').createServer((req, res) => {
 *     sem.wait(function() {
 *		   res.end('.');
 *         setTimeout(() => sem.signal(), 500);
 *     });
 * }).listen(3000);
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Semaphore {
 *     constructor(counter?: number);
 *     wait(fn: () => void): void;
 *     signal(): void;
 * }
 */

_('Class Queue');

exports = Class({
    initialize: function Semaphore(counter = 1) {
        this._counter = counter;
        this._tasks = new Queue();
    },
    wait(fn) {
        if (this._counter > 0) {
            this._counter--;
            return fn();
        }
        this._tasks.enqueue(fn);
    },
    signal() {
        const task = this._tasks.dequeue();
        if (task) {
            return task();
        }
        this._counter++;
    }
});
