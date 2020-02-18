/* Return a function that will itself return the key property of any passed-in object.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |path  |Path of the property to get|
 * |return|New accessor function      |
 */

/* example
 * const obj = {a: {b: 1}};
 * property('a')(obj); // -> {b: 1}
 * property(['a', 'b'])(obj); // -> 1
 */

/* module
 * env: all
 */

/* typescript
 * export declare function property(path: string | string[]): Function;
 */

_('isArr safeGet');

exports = function(path) {
    if (!isArr(path)) return shallowProperty(path);

    return function(obj) {
        return safeGet(obj, path);
    };
};

function shallowProperty(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
}
