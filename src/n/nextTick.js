/* Next tick for both node and browser.
 *
 * |Name|Type    |Desc            |
 * |----|--------|----------------|
 * |cb  |function|Function to call|
 *
 * Use process.nextTick if available.
 *
 * Otherwise setImmediate or setTimeout is used as fallback.
 */

/* example
 * nextTick(function () {
 *     // Do something...
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function nextTick(cb: Function): void;
 */

if (typeof process === 'object' && process.nextTick) {
    exports = process.nextTick;
} else if (typeof setImmediate === 'function') {
    exports = function(cb) {
        setImmediate(ensureCallable(cb));
    };
} else {
    exports = function(cb) {
        setTimeout(ensureCallable(cb), 0);
    };
}

function ensureCallable(fn) {
    if (typeof fn !== 'function')
        throw new TypeError(fn + ' is not a function');

    return fn;
}
