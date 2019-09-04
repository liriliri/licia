/* Determine the internal JavaScript [[Class]] of an object.
 *
 * |Name          |Type   |Desc             |
 * |--------------|-------|-----------------|
 * |val           |*      |Value to get type|
 * |lowerCase=true|boolean|LowerCase result |
 * |return        |string |Type of object   |
 */

/* example
 * type(5); // -> 'number'
 * type({}); // -> 'object'
 * type(function () {}); // -> 'function'
 * type([]); // -> 'array'
 * type([], false); // -> 'Array'
 * type(async function () {}, false); // -> 'AsyncFunction'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function type(val: any, lowerCase?: boolean): string;
 */

_('objToStr isNaN');

exports = function(val, lowerCase = true) {
    if (val === null) return lowerCase ? 'null' : 'Null';
    if (val === undefined) return lowerCase ? 'undefined' : 'Undefined';
    if (isNaN(val)) return lowerCase ? 'nan' : 'NaN';

    const ret = objToStr(val).match(regObj);

    if (!ret) return '';

    return lowerCase ? ret[1].toLowerCase() : ret[1];
};

const regObj = /^\[object\s+(.*?)]$/;
