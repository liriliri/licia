/* Determine the internal JavaScript [[Class]] of an object.
 *
 * |Name  |Type  |Desc                      |
 * |------|------|--------------------------|
 * |val   |*     |Value to get type         |
 * |return|string|Type of object, lowercased|
 */

/* example
 * type(5); // -> 'number'
 * type({}); // -> 'object'
 * type(function () {}); // -> 'function'
 * type([]); // -> 'array'
 */

/* module
 * env: all
 * test: all
 */

_('objToStr isNaN');

function exports(val) {
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (isNaN(val)) return 'nan';

    var ret = objToStr(val).match(regObj);

    if (!ret) return '';

    return ret[1].toLowerCase();
}

var regObj = /^\[object\s+(.*?)]$/;
