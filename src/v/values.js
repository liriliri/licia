/* Create an array of the own enumerable property values of object.
 *
 * |Name  |Type  |Desc                    |
 * |------|------|------------------------|
 * |obj   |object|Object to query         |
 * |return|array |Array of property values|
 */

/* example
 * values({one: 1, two: 2}); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

_('each');

exports = function(obj) {
    var ret = [];

    each(obj, function(val) {
        ret.push(val);
    });

    return ret;
};
