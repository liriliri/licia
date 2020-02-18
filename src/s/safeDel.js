/* Delete object property.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |obj   |Object to query           |
 * |path  |Path of property to delete|
 * |return|Deleted value or undefined|
 */

/* example
 * const obj = {a: {aa: {aaa: 1}}};
 * safeDel(obj, 'a.aa.aaa'); // -> 1
 * safeDel(obj, ['a', 'aa']); // -> {}
 * safeDel(obj, 'a.b'); // -> undefined
 */

/* module
 * env: all
 */

/* typescript
 * export declare function safeDel(obj: any, path: string | string[]): any;
 */

_('isUndef castPath');

exports = function(obj, path) {
    path = castPath(path, obj);

    let prop, ret;

    /* eslint-disable no-cond-assign */
    while ((prop = path.shift())) {
        ret = obj[prop];
        if (path.length === 0) delete obj[prop];
        obj = ret;
        if (isUndef(obj)) return;
    }

    return ret;
};
