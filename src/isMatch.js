/* Check if keys and values in src are contained in obj.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |obj   |Object to inspect                 |
 * |src   |Object of property values to match|
 * |return|True if object is match           |
 */

/* example
 * isMatch({ a: 1, b: 2 }, { a: 1 }); // -> true
 */

/* module
 * env: all
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
