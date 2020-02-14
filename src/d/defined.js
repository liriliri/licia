/* Return the first argument that is not undefined.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |...args|Arguments to check    |
 * |return |First defined argument|
 */

/* example
 * defined(false, 2, void 0, 100); // -> false
 */

/* module
 * env: all
 * since: 1.16.0
 */

/* typescript
 * export declare function defined(...args: any[]): any;
 */

_('isUndef');

exports = function() {
    for (let i = 0, len = arguments.length; i < len; i++) {
        if (!isUndef(arguments[i])) return arguments[i];
    }
};
