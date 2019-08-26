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

/* typescript
 * export declare function isMatch(obj: any, src: any): boolean;
 */

_('keys');

exports = function(obj, src) {
    const _keys = keys(src);
    const len = _keys.length;

    if (obj == null) return !len;

    obj = Object(obj);

    for (let i = 0; i < len; i++) {
        const key = _keys[i];
        if (src[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
};
