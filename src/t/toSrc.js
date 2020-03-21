/* Convert function to its source code.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |fn    |Function to convert|
 * |return|Source code        |
 */

/* example
 * toSrc(Math.min); // -> 'function min() { [native code] }'
 * toSrc(function () {}) // -> 'function () { }'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function toSrc(fn: types.AnyFn): string;
 */

_('isNil types');

exports = function(fn) {
    if (isNil(fn)) return '';

    try {
        return fnToStr.call(fn);
        /* eslint-disable no-empty */
    } catch (e) {}

    try {
        return fn + '';
        /* eslint-disable no-empty */
    } catch (e) {}

    return '';
};

const fnToStr = Function.prototype.toString;
