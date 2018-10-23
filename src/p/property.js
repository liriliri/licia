/* Return a function that will itself return the key property of any passed-in object.
 *
 * |Name  |Type        |Desc                       |
 * |------|------------|---------------------------|
 * |path  |string array|Path of the property to get|
 * |return|function    |New accessor function      |
 */

/* example
 * var obj = {a: {b: 1}};
 * property('a')(obj); // -> {b: 1}
 * property(['a', 'b'])(obj); // -> 1
 */

/* module
 * env: all
 * test: all
 */

_('isArr safeGet');

function exports(path) {
    if (!isArr(path)) return shallowProperty(path);

    return function(obj) {
        return safeGet(obj, path);
    };
}

function shallowProperty(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
}
