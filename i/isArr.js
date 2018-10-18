/* Check if value is an `Array` object.
 *
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |val   |*      |Value to check                    |
 * |return|boolean|True if value is an `Array` object|
 */

/* example
 * isArr([]); // -> true
 * isArr({}); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isArr(val: any): boolean
 */

_('objToStr');

exports =
    Array.isArray ||
    function(val) {
        return objToStr(val) === '[object Array]';
    };
