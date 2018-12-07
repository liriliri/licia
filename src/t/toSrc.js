/* Convert function to its source code.
 * 
 * |Name  |Type    |Desc               |
 * |------|--------|-------------------|
 * |fn    |function|Function to convert|
 * |return|string  |Source code        |
 */

/* example
 * toSrc(Math.min); // -> 'function min() { [native code] }'
 * toSrc(function () {}) // -> 'function () { }'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function toSrc(fn: Function): string;
 */

_('isNil');

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

var fnToStr = Function.prototype.toString;
