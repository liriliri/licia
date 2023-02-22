/* Check if value is a Map object.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |val   |Value to check        |
 * |return|True if value is a Map|
 */

/* example
 * isMap(new Map()); // -> true
 * isMap(new WeakMap()); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isMap(val: any): val is Map;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Map]';
};
