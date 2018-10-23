/* Return a filtered copy of an object.
 *
 * |Name  |Type                 |Desc           |
 * |------|---------------------|---------------|
 * |obj   |object               |Source object  |
 * |filter|string array function|Object filter  |
 * |return|object               |Filtered object|
 */

/* example
 * pick({a: 1, b: 2}, 'a'); // -> {a: 1}
 * pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
 * pick({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
 *     return val % 2;
 * }); // -> {a: 1, c: 3}
 */

/* module
 * env: all
 * test: all
 */

_('isStr isArr contain each');

exports = function(obj, filter, omit) {
    if (isStr(filter)) filter = [filter];

    if (isArr(filter)) {
        var keys = filter;

        filter = function(val, key) {
            return contain(keys, key);
        };
    }

    var ret = {};

    var iteratee = function(val, key) {
        if (filter(val, key)) ret[key] = val;
    };

    if (omit) {
        iteratee = function(val, key) {
            if (!filter(val, key)) ret[key] = val;
        };
    }

    each(obj, iteratee);

    return ret;
};
