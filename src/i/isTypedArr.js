/* Check if value is a typed array.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |Value to check                |
 * |return|boolean|True if value is a typed array|
 */

/* example
 * isTypedArr([]); // -> false
 * isTypedArr(new Uint8Array(8)); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isTypedArr(val: any): boolean;
 */

_('objToStr each');

exports = function(val) {
    return !!map[objToStr(val)];
};

const map = {};

each(
    [
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array'
    ],
    function(val) {
        map['[object ' + val + ']'] = true;
    }
);
