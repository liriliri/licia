/* Check if value is an `Array` object.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |val   |Value to check                    |
 * |return|True if value is an `Array` object|
 */

/* example
 * isArr([]); // -> true
 * isArr({}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isArr(val: any): val is any[];
 */

_('objToStr');

if (Array.isArray && !LICIA_TEST) {
    exports = Array.isArray;
} else {
    exports = function(val) {
        return objToStr(val) === '[object Array]';
    };
}
