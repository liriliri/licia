/* Return a filtered copy of an object.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |object|Source object  |
 * |filter|Object filter  |
 * |return|Filtered object|
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
 */

/* typescript
 * export declare function pick(
 *     object: any,
 *     filter: string | string[] | Function,
 * ): any;
 */

_('isStr isArr contain each');

exports = function(obj, filter, omit) {
    if (isStr(filter)) filter = [filter];

    if (isArr(filter)) {
        const keys = filter;

        filter = function(val, key) {
            return contain(keys, key);
        };
    }

    const ret = {};

    let iteratee = function(val, key) {
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
