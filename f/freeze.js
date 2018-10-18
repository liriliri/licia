/* Shortcut for Object.freeze.
 *
 * Use Object.defineProperties if Object.freeze is not supported.
 * 
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |obj   |object|Object to freeze|
 * |return|object|Object passed in|
 */

/* example
 * var a = {b: 1};
 * freeze(a);
 * a.b = 2;
 * console.log(a); // -> {b: 1}
 */

/* module
 * env: all
 * test: all
 */

_('keys');

function exports(obj) {
    if (Object.freeze) return Object.freeze(obj);

    keys(obj).forEach(function(prop) {
        if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) return;

        Object.defineProperty(obj, prop, {
            writable: false,
            configurable: false
        });
    });

    return obj;
}
