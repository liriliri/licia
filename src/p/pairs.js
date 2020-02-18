/* Convert an object into a list of [key, value] pairs.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |obj   |Object to convert         |
 * |return|List of [key, value] pairs|
 */

/* example
 * pairs({a: 1, b: 2}); // -> [['a', 1], ['b', 2]]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function pairs(obj: any): Array<any[]>;
 */

_('keys');

exports = function(obj) {
    const _keys = keys(obj);
    const len = _keys.length;
    const ret = Array(len);

    for (let i = 0; i < len; i++) {
        ret[i] = [_keys[i], obj[_keys[i]]];
    }

    return ret;
};
