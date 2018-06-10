/* Recursively use Object.freeze.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |obj   |object|Object to freeze|
 * |return|object|Object passed in|
 * 
 * ```javascript
 * var a = {b: {c: 1}};
 * freezeDeep(a);
 * a.b.c = 2;
 * console.log(a); // -> {b: {c: 1}}
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('freeze keys isObj');

function exports(obj) {
    freeze(obj);

    keys(obj).forEach(function(prop) {
        var val = obj[prop];

        if (isObj(val) && !Object.isFrozen(val)) exports(val);
    });

    return obj;
}
