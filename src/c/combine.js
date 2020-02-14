/* Create an array by using one array for keys and another for its values.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |keys  |Keys to be used  |
 * |values|Values to be used|
 * |return|Created object   |
 */

/* example
 * combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
 */

/* module
 * env: all
 * since: 1.1.0
 */

/* typescript
 * export declare function combine(keys: string[], values: any[]): any;
 */

exports = function(keys, values) {
    const ret = {};

    for (let i = 0, len = keys.length; i < len; i++) {
        ret[keys[i]] = values[i];
    }

    return ret;
};
