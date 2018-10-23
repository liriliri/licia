/* Check if keys and values in src are contained in obj.
 *
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |obj   |object |Object to inspect                 |
 * |src   |object |Object of property values to match|
 * |return|boolean|True if object is match           |
 */

/* example
 * isMatch({a: 1, b: 2}, {a: 1}); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('keys');

function exports(obj, src) {
    var _keys = keys(src),
        len = _keys.length;

    if (obj == null) return !len;

    obj = Object(obj);

    for (var i = 0; i < len; i++) {
        var key = _keys[i];
        if (src[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
}
