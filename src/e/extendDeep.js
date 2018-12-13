/* Recursive object extending.
 *
 * |Name       |Type  |Desc              |
 * |-----------|------|------------------|
 * |destination|object|Destination object|
 * |...sources |object|Sources objects   |
 * |return     |object|Destination object|
 */

/* example
 * extendDeep({
 *     name: 'RedHood',
 *     family: {
 *         mother: 'Jane',
 *         father: 'Jack'
 *     }
 * }, {
 *     family: {
 *         brother: 'Bruce'
 *     }
 * });
 * // -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function extendDeep(destination: any, ...sources: any[]): any;
 */

_('isPlainObj each cloneDeep');

exports = function(obj) {
    var i = 0,
        ret = obj,
        len = arguments.length;

    while (++i < len) {
        obj = arguments[i];

        if (isPlainObj(ret) && isPlainObj(obj)) {
            each(obj, function(val, key) {
                ret[key] = exports(ret[key], obj[key]);
            });
        } else {
            ret = cloneDeep(obj);
        }
    }

    return ret;
};
