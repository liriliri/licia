/* Determine the internal JavaScript [[Class]] of an object.
 *
 * |Name          |Desc             |
 * |--------------|-----------------|
 * |val           |Value to get type|
 * |lowerCase=true|LowerCase result |
 * |return        |Type of object   |
 */

/* example
 * type(5); // -> 'number'
 * type({}); // -> 'object'
 * type(function() {}); // -> 'function'
 * type([]); // -> 'array'
 * type([], false); // -> 'Array'
 * type(async function() {}, false); // -> 'AsyncFunction'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function type(val: any, lowerCase?: boolean): string;
 */

_('objToStr isNaN lowerCase isBuffer');

exports = function(val, lower = true) {
    let ret;
    if (val === null) ret = 'Null';
    if (val === undefined) ret = 'Undefined';
    if (isNaN(val)) ret = 'NaN';
    if (isBuffer(val)) ret = 'Buffer';

    if (!ret) {
        ret = objToStr(val).match(regObj);
        if (ret) ret = ret[1];
    }

    if (!ret) return '';

    return lower ? lowerCase(ret) : ret;
};

const regObj = /^\[object\s+(.*?)]$/;
