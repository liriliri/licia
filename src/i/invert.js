/* Create an object composed of the inverted keys and values of object.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |obj   |Object to invert   |
 * |return|New inverted object|
 *
 * If object contains duplicate values, subsequent values overwrite property assignments of previous values.
 */

/* example
 * invert({ a: 'b', c: 'd', e: 'f' }); // -> {b: 'a', d: 'c', f: 'e'}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function invert(obj: any): any;
 */

_('each');

exports = function(obj) {
    const ret = {};

    each(obj, function(val, key) {
        ret[val] = key;
    });

    return ret;
};
