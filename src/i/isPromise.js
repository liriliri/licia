/* Check if value looks like a promise.
 *
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |val   |*      |Value to check                    |
 * |return|boolean|True if value looks like a promise|
 */

/* example
 * isPromise(new Promise(function () {})); // -> true
 * isPromise({}); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isPromise(val: any): boolean;
 */

_('isObj isFn');

exports = function(val) {
    return isObj(val) && isFn(val.then);
};
