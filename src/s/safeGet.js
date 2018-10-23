/* Get object property, don't throw undefined error.
 *
 * |Name  |Type        |Desc                     |
 * |------|------------|-------------------------|
 * |obj   |object      |Object to query          |
 * |path  |array string|Path of property to get  |
 * |return|*           |Target value or undefined|
 */

/* example
 * var obj = {a: {aa: {aaa: 1}}};
 * safeGet(obj, 'a.aa.aaa'); // -> 1
 * safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
 * safeGet(obj, 'a.b'); // -> undefined
 */

/* module
 * env: all
 * test: all
 */

_('isUndef castPath');

function exports(obj, path) {
    path = castPath(path, obj);

    var prop;

    prop = path.shift();
    while (!isUndef(prop)) {
        obj = obj[prop];
        if (obj == null) return;
        prop = path.shift();
    }

    return obj;
}
