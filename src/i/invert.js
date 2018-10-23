/* Create an object composed of the inverted keys and values of object.
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |obj   |object|Object to invert   |
 * |return|object|New inverted object|
 *
 * If object contains duplicate values, subsequent values overwrite property assignments of previous values.
 */

/* example
 * invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
 */

/* module
 * env: all
 * test: all
 */

_('each');

exports = function(obj) {
    var ret = {};

    each(obj, function(val, key) {
        ret[val] = key;
    });

    return ret;
};
