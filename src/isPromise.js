/* Check if value looks like a promise.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |val   |Value to check                    |
 * |return|True if value looks like a promise|
 */

/* example
 * isPromise(new Promise(function() {})); // -> true
 * isPromise({}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isPromise(val: any): boolean;
 */

_('isObj isFn');

exports = function(val) {
    return isObj(val) && isFn(val.then) && isFn(val.catch);
};
