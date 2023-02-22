/* Check if value is a WeakMap object.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |val   |Value to check            |
 * |return|True if value is a WeakMap|
 */

/* example
 * isWeakMap(new Map()); // -> false
 * isWeakMap(new WeakMap()); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isWeakMap(val: any): val is WeakMap;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object WeakMap]';
};
